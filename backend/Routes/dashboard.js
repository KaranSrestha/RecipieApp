const express = require("express");
const authenticateToken = require("../config/authenticateJWT");
const router = express.Router();

router.get("/dashboard", authenticateToken, async (req, res)=>{
    const userId = req.user.user_id;

    const q1 =`
        SELECT * FROM users
        WHERE user_id = $1;
    `
    const v1 = [userId];

    const q2 = `
        SELECT * FROM posts
        ORDER BY post_id Desc;
    `
    try{
        const result1 = await db.query(q1, v1);
        const result2 = await db.query(q2);
        res.status(200).json({posts: result2.rows, user_details: result1.rows}); 
    }catch(e){
        res.status(500).json({error: "Database Error"});
    }
})