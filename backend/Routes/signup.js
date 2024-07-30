const express = require("express");
const router = express.Router();
const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secretKey = "secret_key"; // Replace with your actual secret key

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
    const query = `
        INSERT INTO users(name, username, password, email)
        VALUES($1, $2, $3, $4)
        RETURNING user_id, username; -- Retrieve user_id and username after insertion
    `;
    const values = [name, username, hashedPassword, email];

    try {
        const result = await db.query(query, values);
        console.log('Data Insertion Success');
        
        const user = result.rows[0]; // Retrieve the inserted user's details
        const token = jwt.sign({ user_id: user.user_id, username: user.username }, secretKey, { expiresIn: '1h' });
        
        res.status(200).json({ message: 'Successfully signed up', token });
    } catch (e) {
        console.error('Error Inserting Data: ', e);
        res.status(502).json({ message: "Something went wrong" });
    }
});

module.exports = router;
