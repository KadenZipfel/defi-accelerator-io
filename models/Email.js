const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  emails: [{
    type: String,
    trim: true
  }]
});

const Email = mongoose.model('Email', emailSchema);
module.exports = Email;