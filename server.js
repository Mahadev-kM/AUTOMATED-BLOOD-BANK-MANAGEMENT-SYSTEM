const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend requests

// Connect to MySQL Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",      // Change if your MySQL username is different
    password: "Kishore@0601",      // Add your MySQL password
    database: "bloodStockDB"
});

db.connect((err) => {
    if (err) {
        console.error("MySQL Connection Failed:", err);
    } else {
        console.log("Connected to MySQL Database");
    }
});

// GET API to fetch blood banks based on filters
app.get("/blood-banks", (req, res) => {
    const { state, district, bloodType } = req.query;

    let query = "SELECT * FROM blood_banks WHERE 1=1";
    let values = [];

    if (state && state !== "Select State") {
        query += " AND state = ?";
        values.push(state);
    }
    if (district && district !== "Select District") {
        query += " AND district = ?";
        values.push(district);
    }
    if (bloodType && bloodType !== "All Blood Groups") {
        query += " AND bloodType = ?";
        values.push(bloodType);
    }

    db.query(query, values, (err, results) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(results);
        }
    });
});

// Start the Server
app.listen(5000, () => console.log("Server running on port 5000"));
