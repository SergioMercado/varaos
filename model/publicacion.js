const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publicacionSchema = new Schema({
  titulo: String,
  ciudad: String,
  resumen: String,
  fotos: String,
  tiempoDeVida: Number,
  categoria: mongoose.Types.ObjectId
});

module.exports = mongoose.model("publicacion", publicacionSchema);
