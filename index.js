const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
require('dotenv').config();

const app = express();

app.use(express.json());

const DATABASE_URL="mongodb+srv://revu:vandy2024@cluster0.6i7imii.mongodb.net/revu"
const mongoString = DATABASE_URL//process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const routes = require('./routes/routes');

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

