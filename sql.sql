CREATE DATABASE IF NOT EXISTS bloodStockDB;
USE bloodStockDB;

CREATE TABLE IF NOT EXISTS blood_banks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    state VARCHAR(100),
    district VARCHAR(100),
    bloodType VARCHAR(10),
    lat DECIMAL(9,6),
    lon DECIMAL(9,6)
);
INSERT INTO blood_banks (name, state, district, bloodType, lat, lon) VALUES
("Bangalore Blood Center", "Karnataka", "Bangalore", "O-", 12.9716, 77.5946),
("Delhi Blood Bank", "Delhi", "New Delhi", "A+", 28.6139, 77.2090),
("Mumbai Life Care", "Maharashtra", "Mumbai", "B-", 19.0760, 72.8777);
