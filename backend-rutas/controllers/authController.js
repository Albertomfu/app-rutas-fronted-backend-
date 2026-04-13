const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTRO
exports.register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json("El usuario ya existe");

    const hash = await bcrypt.hash(password, 10);

    const user = new Usuario({
      nombre,
      email,
      password: hash,
    });

    await user.save();

    // 🔥 GENERAR TOKEN (CLAVE)
    const token = jwt.sign({ id: user._id, role: user.role }, "secreto", {
      expiresIn: "1d",
    });

    res.json({ token, user }); // 👈 IMPORTANTE
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Usuario.findOne({ email });
    if (!user) return res.status(400).json("Usuario no existe");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json("Password incorrecta");

    const token = jwt.sign({ id: user._id, role: user.role }, "secreto", {
      expiresIn: "1d",
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json(error);
  }
};
