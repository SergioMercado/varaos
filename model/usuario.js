const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  ciudad: String,
  telefono: String,
  puntaje: Number,
  image: String,
  cedula: String
});

module.exports = mongoose.model("usuario", usuarioSchema);
