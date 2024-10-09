const express = require('express');
const { initializeDatabase } = require('./db');
const peopleRoutes = require('./routes/people');

const app = express();
const port = 3000;

initializeDatabase();

app.use('/', peopleRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
