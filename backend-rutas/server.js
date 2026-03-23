const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const rutasRoutes = require("./routes/rutasRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/extrerutas")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

app.use("/api/rutas", rutasRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Servidor corriendo en puerto 5000");
});
