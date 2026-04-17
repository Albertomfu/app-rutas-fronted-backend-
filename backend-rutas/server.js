const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const rutasRoutes = require("./routes/rutas");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
// app.use(express.json()); // hay que limitar los megas para subir fotos ya que si no ocupa muchisimo he cambiado lo anterior por:
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

mongoose
  .connect("mongodb://localhost:27017/extrerutas")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

app.use("/api/rutas", rutasRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Servidor corriendo en puerto 5000");
});
