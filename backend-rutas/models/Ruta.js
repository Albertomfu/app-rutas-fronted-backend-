const mongoose = require("mongoose");

const RutaSchema = new mongoose.Schema({
  nombre: String,
  zona: String,
  descripcion: String,

  salida: String,
  llegada: String,
  km: Number,
  duracion: String,
  dificultad: String,
  tipo: String,
  imagen: String,
  maps: String,
  wikiloc: String,
});

module.exports = mongoose.model("Ruta", RutaSchema);
