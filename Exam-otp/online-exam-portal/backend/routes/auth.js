// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');

// Registration Route
router.post('/register', (req, res, next) => {
    const { username, password, email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    let sql = 'INSERT INTO users (username, password, email, otp) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, password, email, otp], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return next(err);  // Pass the error to the error handler
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sushmitha2721.k@gmail.com',
                pass: 'vldx quay cfho sung'
            }
        });

        const mailOptions = {
            from: 'sushmitha2721.k@gmail.com',
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email error:', error);
                return next(error);  // Pass the error to the error handler
            }
            res.send('User registered and OTP sent');
        });
    });
});

// Login Route
router.post('/login', (req, res, next) => {
    const { username, password, otp } = req.body;
    let sql = 'SELECT * FROM users WHERE username = ? AND password = ? AND otp = ?';
    db.query(sql, [username, password, otp], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return next(err);  // Pass the error to the error handler
        }
        if (result.length > 0) {
            res.send({ success: true, message: 'Login successful' });
        } else {
            res.send({ success: false, message: 'Invalid credentials or OTP' });
        }
    });
});

module.exports = router;
