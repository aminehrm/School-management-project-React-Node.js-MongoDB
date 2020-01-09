const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  departement: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 2
  },
}, {
  timestamps: true,
});

const User = mongoose.model('Departements', userSchema);

module.exports = User;