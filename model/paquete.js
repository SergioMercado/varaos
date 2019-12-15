const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paqueteSchema = new Schema({
  nombre: String,
  tiempoDeVida: Number,//numero de dias 
  cantidadDeAnuncios:Number,
  precio: Number,


});

module.exports = mongoose.model("paquete", paqueteSchema);