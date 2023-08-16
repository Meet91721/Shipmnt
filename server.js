const express = require('express');
const dotenv = require('dotenv').config()
const connectDb = require('./config/dbConnection')

const app = express();
app.use(express.json())
const port = process.env.PORT || 5001;

connectDb()
app.get('/shree', (req, res) => res.send('Shree'));

app.use('/api/patient', require('./routes/patientRoutes'));
app.use('/api/medical', require('./routes/medicalRoutes'));

app.listen(port, () => console.log(`Express app running on port ${port}!`));