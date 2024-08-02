const express = require("express");
const router = express.Router();
const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plainPassword) => {
    try {
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
    }
};

router.post("/signup", async (req, res) => {
    const { name, username, password, email } = req.body;
    const hashedPassword = await hashPassword(password); // Hash the password

    const query2 =`
        Select * from users
        where username = $1
    `
    const value2 = [username];

    const query = `
        INSERT INTO users(name, username, password, email)
        VALUES($1, $2, $3, $4)
        RETURNING user_id, username; -- Retrieve user_id and username after insertion
    `;
    const values = [name, username, hashedPassword, email];

    try {
        const r = await db.query(query2, value2);
        if(r.rows[0]){
            console.log(r.rows[0].length)
            return res.json({error: "user already exist"});
        }
        const result = await db.query(query, values);
        console.log('Data Insertion Success');
        
        res.status(200).json({ message: 'Successfully signed up' });
    } catch (e) {
        console.error('Error Inserting Data: ', e);
        res.status(502).json({ message: "Something went wrong" });
    }
});

module.exports = router;
