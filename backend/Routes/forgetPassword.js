const express = require("express");
const db = require("../config/db");
const nodemailer = require("nodemailer");
const router = express.Router();

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});

router.post("/forgot-password/get-email", async (req, res) => {
    const {email} = req.body;
    const query = `
        SELECT * from users
        WHERE email = $1
    `
    const values = [email];
    try{
        const user = await db.query(query, values);
        if(user.length === 0){
            return res.status(404).json({error: "User not found"});
        }

        const otp = generateOTP();
        const otpExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

        const updateQuery = `
            UPDATE users
            SET otp = $1, otp_expires_at = $2
            WHERE email = $3
        `;
        const updateValues = [otp, otpExpiresAt, email];
        await db.query(updateQuery, updateValues);

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: "Failed to send email" });
            }
            return res.status(200).json({ message: "OTP sent successfully" });
        });


    }catch(e){
        console.log(e);
        res.status(500).json({error: "Server Error"});
    }
})

router.post("/forget-password/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    
    const query = `
        SELECT otp, otp_expires_at FROM users
        WHERE email = $1
    `;
    const values = [email];

    try {
        const userResult = await db.query(query, values);
        if (userResult.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = userResult.rows[0];

        if (user.otp !== otp) {
            return res.status(400).json({ error: "Invalid OTP" });
        }

        const currentTime = new Date();
        if (currentTime > user.otp_expires_at) {
            return res.status(400).json({ error: "OTP has expired" });
        }

        return res.status(200).json({ message: "OTP verified successfully" });

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});