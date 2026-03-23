const express = require("express");
const router = express.Router();

const rutasController = require("../controllers/rutasController");

router.get("/", rutasController.getRutas);

router.post("/", rutasController.crearRuta);

router.put("/:id", rutasController.editarRuta);

router.delete("/:id", rutasController.borrarRuta);

module.exports = router;
