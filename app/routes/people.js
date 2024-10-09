const express = require('express');
const router = express.Router();
const { pool } = require('../db');

router.get('/', async (req, res) => {
    try {
        const name = req.query.name || 'Anonymous'; // Default to 'Anonymous' if no name is provided

        await pool.query(`INSERT INTO people(name) VALUES (?)`, [name]);

        const rows = await pool.query(`SELECT * FROM people`);

        let pageContent = '<h1>Full Cycle Rocks!</h1>';
        rows.forEach((record) => {
            pageContent += ` ${record.name} <br>`;
        });

        res.send(pageContent);
    } catch (error) {
        console.error('Error during request:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
