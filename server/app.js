const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const Email = require('./models/Email');

const app = express();

if(process.env.NODE_ENV === 'production') {
  mongoose.connect(keys.db);
} else {
  mongoose.connect('mongodb://localhost/defi-accelerator', { useNewUrlParser: true })
}

app.post('/email', (req, res) => {
  Email.emails.push(req.body.email);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));