const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const varaoSchema = new Schema({
  name: { type: String },
  title: { type: String },
  resume: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String },
  category: { type: String }
});

module.exports = mongoose.model("Varao", varaoSchema);
