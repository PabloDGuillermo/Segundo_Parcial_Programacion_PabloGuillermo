const Log = require("../models/Log");

const obtenerLogs = async (req, res) => {
    try {
        const listadoLogs = await Log.findAll();

        res.render("logVista", { logs: listadoLogs });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

module.exports = obtenerLogs;