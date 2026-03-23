const Ruta = require("../models/Ruta");

exports.getRutas = async (req, res) => {
  const rutas = await Ruta.find();
  res.json(rutas);
};

exports.crearRuta = async (req, res) => {
  const ruta = new Ruta(req.body);
  await ruta.save();

  res.json(ruta);
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
