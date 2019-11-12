const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Email = require('./models/Email');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://kzipfel:ml4b-p455w0rd@ds029287.mlab.com:29287/defi-accelerator');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser());

app.post('/email', (req, res) => {
  const email = new Email({email: req.body.email});
  email.save();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));