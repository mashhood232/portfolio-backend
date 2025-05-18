
const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  year: String,
});

module.exports = mongoose.model('Education', EducationSchema);
