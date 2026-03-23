const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
