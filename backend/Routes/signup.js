const express = require("express");
const router = express.Router();
const db = require("../config/db.js");


router.post("/api/signup", async (req, res) => {
    const {name, username, password, email} = req.body;
    const query = `
        INSERT INTO userdb
        VALUES($1, $2, $3, $4);
    `;
    const values = [name, username, password, email]
    
    try {
        await db.query(query, values);
        console.log('Data Insertion Success');
        res.status(200).json({ message: `Welcome ${username}` });
    } catch (e) {
        console.error('Error Inserting Data: ', e);
        res.status(502).json({ message: "Something went wrong" });
    }
});

module.exports = router;