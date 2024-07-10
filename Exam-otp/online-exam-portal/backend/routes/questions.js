// backend/routes/questions.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Fetch Questions Route
router.get('/questions', (req, res) => {
    let sql = 'SELECT * FROM questions';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
