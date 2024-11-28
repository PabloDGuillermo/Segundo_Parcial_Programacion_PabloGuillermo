const Log = require("../models/Log");

const logRuta = async (req, res, next) => {
    try {
        const ruta = req.url;
        const metodo = req.method;

        const logCreado = await Log.create({ ruta, metodo });

        if(logCreado){
            next();
        } else { 
            res.status(400).json({ error: "Error al crear el log" });
        }

    } catch (error) {
        res.status(500).json({ error: "error interno del servidor" });
    }
};

module.exports = logRuta;