const Ruta = require("../models/Ruta");

exports.getRutas = async (req, res) => {
  const rutas = await Ruta.find();
  res.json(rutas);
};
exports.crearRuta = async (req, res) => {
  try {
    console.log(req.body); // 👈 DEBUG IMPORTANTE

    const nuevaRuta = new Ruta(req.body); // 🔥 GUARDA TODO

    await nuevaRuta.save();

    res.json(nuevaRuta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error creando ruta" });
  }
};

exports.editarRuta = async (req, res) => {
  const ruta = await Ruta.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(ruta);
};

exports.borrarRuta = async (req, res) => {
  await Ruta.findByIdAndDelete(req.params.id);

  res.json({ mensaje: "Ruta eliminada" });
};
