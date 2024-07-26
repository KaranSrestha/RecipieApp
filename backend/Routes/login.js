const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../config/authenticateJWT");

const secretKey = process.env.JWT_SECRET || 'my_jwt_secret'; 
router.get("/login", async (req, res) => {
    const { username, password } = req.body;
    
    const query = `
        SELECT * FROM users
        WHERE username = $1;
    `;
    const values = [username];

    try {
        const result = await db.query(query, values);

        if (result.rows.length > 0) {
            const user = result.rows[0];

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                const token = jwt.sign({ user_id: user.user_id, username: user.username }, secretKey, { expiresIn: '1h' });
                res.status(200).json({ message: "Logged in successfully", token });
            } else {
                res.status(401).json({ message: "Invalid password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (e) {
        console.error('Error querying database:', e);
        res.status(502).json({ message: "Something went wrong" });
    }
});

module.exports = router;
