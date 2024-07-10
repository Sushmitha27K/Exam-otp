// backend/db.js
const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'Dumbu@21', // replace with your MySQL password
    database: 'online_exam' // replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        throw err;
    }
    console.log('MySQL Connected...');
});

// Export the connection
module.exports = db;
