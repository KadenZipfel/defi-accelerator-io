const express = require('express');
const mongoose = require('mongoose');
const Email = require('./models/Email');

const app = express();

mongoose.connect('mongodb://kzipfel:ml4b-p455w0rd@ds029287.mlab.com:29287/defi-accelerator');

app.post('/email', (req, res) => {
  Email.emails.push(req.body.email);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));