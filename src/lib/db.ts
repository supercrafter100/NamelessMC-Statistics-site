import mysql from "mysql2/promise";
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.query("CREATE TABLE IF NOT EXISTS Installations_Statistics ( `id` INT NOT NULL AUTO_INCREMENT, `installations` INT NOT NULL, `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`))");

export default pool;
