const mongoose = require("mongoose");

const RutaSchema = new mongoose.Schema({
  nombre: String,
  zona: String,
  dificultad: String,
  distancia: Number,
  duracion: String,
  descripcion: String,
  imagen: String,
  coordenadas: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model("Ruta", RutaSchema);
