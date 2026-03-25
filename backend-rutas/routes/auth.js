const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/authController");

// REGISTRO
router.post("/register", register);

// LOGIN
router.post("/login", login);

module.exports = router;
