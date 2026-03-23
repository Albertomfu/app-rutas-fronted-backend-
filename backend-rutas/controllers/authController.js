const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Usuario.findOne({ email });

  if (!user) return res.status(400).json("Usuario no existe");

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(400).json("Password incorrecta");

  const token = jwt.sign({ id: user._id, role: user.role }, "secreto", {
    expiresIn: "1d",
  });

  res.json({ token, user });
};
