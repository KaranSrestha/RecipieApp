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
    const {name, username, password, email} = req.body;
    const query = `
        INSERT INTO users(name, username, password, email)
        VALUES($1, $2, $3, $4);
    `;
    const values = [name, username, hashPassword(password), email]
    
    try {
        await db.query(query, values);
        console.log('Data Insertion Success');

        const token = jwt.sign({ user_id: user.user_id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: `Successfully signed up` , token});
    } catch (e) {
        console.error('Error Inserting Data: ', e);
        res.status(502).json({ message: "Something went wrong" });
    }
});

module.exports = router;