const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Arjun"
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("Connection failed:", err.message);
        return;
    }

    console.log("Connected to MySQL");

    // SQL query
    const sql = `
        CREATE TABLE IF NOT EXISTS STUDENT (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50)
        )
    `;

    // Execute query
    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating table:", err.message);
            return;
        }

        console.log("Table created successfully");

        // Close connection (best practice)
        connection.end();
    });
});