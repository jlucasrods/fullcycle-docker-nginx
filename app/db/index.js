const mysql = require('mysql');
const util = require('util');

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const pool = mysql.createPool(dbConfig);

pool.query = util.promisify(pool.query);

async function initializeDatabase() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS people(
                id int NOT NULL AUTO_INCREMENT,
                name VARCHAR(255),
                PRIMARY KEY (id)
            )
        `);
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

module.exports = { pool, initializeDatabase };
