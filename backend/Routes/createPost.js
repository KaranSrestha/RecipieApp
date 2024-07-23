const express = require("express");
const router = express.Router();
const db = require("../config/db");
const authenticateToken = require("../config/authenticateJWT");
const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/create-post", authenticateToken, upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const userId = req.user.user_id;
    const imageFile = req.file;

    if (!title || !description || !imageFile) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    try {
        const uploadStream = cloudinary.uploader.upload_stream({ folder: 'posts' });

        streamifier.createReadStream(imageFile.buffer).pipe(uploadStream)
            .on('error', (error) => {
                console.error('Error uploading image:', error);
                res.status(500).json({ message: "Image upload failed" });
            })
            .on('finish', async () => {
                const imageUrl = uploadStream.url;


                const query = `
                    INSERT INTO posts (user_id, title, description, post_img)
                    VALUES ($1, $2, $3, $4) RETURNING *;
                `;
                const values = [userId, title, description, imageUrl];
                
                try {
                    const result = await db.query(query, values);
                    res.status(201).json(result.rows[0]);
                } catch (e) {
                    console.error('Database Error:', e);
                    res.status(502).json({ message: "Database Error" });
                }
            });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
