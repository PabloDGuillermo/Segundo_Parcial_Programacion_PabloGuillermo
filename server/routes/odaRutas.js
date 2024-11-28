const express = require('express');
const router = express.Router();
const odaControlador = require("../controllers/odaControlador");
const validaciones = require ("../middlewares/validaciones");
const subirImagen = require("../middlewares/subirImagen");

router.post("/", subirImagen.single("imagen"), validaciones.validarCreacionObraDeArte, odaControlador.CrearObraDeArte);

router.get("/", odaControlador.obtenerObrasDeArte);

router.put("/:id", odaControlador.modificarObraDeArte);

router.delete("/:id", validaciones.validarIdObraDeArte, odaControlador.eliminarObraDeArte);

router.patch("/:id", validaciones.validarIdObraDeArte, odaControlador.activarObraDeArte);

module.exports = router;