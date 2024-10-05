const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  technologies: [String],
  link: String,
  imageUrl: String,
});

module.exports = mongoose.model('Project', projectSchema);
