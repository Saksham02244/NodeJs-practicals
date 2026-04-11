const mysql = require('mysql2');

// create connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Arjun"
});

// connect to mysql
connection.connect((err) => {
    if (err) {
        console.error("Connection failed:", err.message);
        return;
    }

    console.log("Connected to MySQL");

    // sql query
    const sql = `
        CREATE TABLE IF NOT EXISTS STUDENT (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50)
        )
    `;

    // execute query
    connection.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating table:", err.message);
            return;
        }

        console.log("Table created successfully");

        // close connection(good practice)
        connection.end();
    });
});
