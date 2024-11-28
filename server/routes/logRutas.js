const express = require('express');
const router = express.Router();
const logControlador = require("../controllers/logControlador");

router.get("/", logControlador);

module.exports = router;