const express = require('express');
const router = express.Router();


router.post("/like", (req, res)=>{
    const {post_id, hasLiked} = req.body;
    const query = hasLiked?`UPDATE posts SET likes_count = likes_count + 1 WHERE post_id = $1 RETURNING likes_count`
                            :`UPDATE posts SET likes_count = likes_count - 1 WHERE post_id = $1 AND likes_count > 0 RETURNING likes_count`;
    const values = [post_id];
    try{
        const result = db.query(query, values);
        res.json({like: result.rows[0].like_count}).status(200);
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Operation Failed"});
    }
})