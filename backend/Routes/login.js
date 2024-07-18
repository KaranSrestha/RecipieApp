const express = require("express");
const router = express.Router();
const db = require("../config/db.js")


router.get("/api/login", async (req, res) => {
    const {username , password} = req.query;
    const query = `
        SELECT * FROM user
        WHERE username = $1 AND password = $2;
    `
    const values = [ username, password ];

    try{
        const result = await db.query(query);
        if(result.rows.length > 0){
            const user = result.row[0];
            res.status(200).json({ message: "Logged in successfully", user });
        }else{
            res.status(404).json({message: "User Not Found"});
        }
    }catch(e){
        console.error('Error querying database: ', e);
        res.status(502).json({ message: "Something went wrong" });
    }
});


module.exports = router;