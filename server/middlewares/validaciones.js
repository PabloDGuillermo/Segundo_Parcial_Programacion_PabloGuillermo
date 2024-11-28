const validarCreacionObraDeArte = async (req, res, next) => {
    const { nombre, tipo, anioDeCreacion } = req.body;

    anioParseado = parseInt(anioDeCreacion);
    console.log(req.body);

    if(typeof nombre === "string" && (tipo === "pintura" || tipo === "escultura") && typeof anioParseado === "number"){
        next();
    } else {
        res.status(400).json({ error: "Datos mal ingresados" });
    }
};

const validarModificacionObraDeArte = async (req, res, next) => {
    const { nombre, tipo, anioDeCreacion } = req.body;
    const id = req.params.id;

    anioParseado = parseInt(anioDeCreacion);
    idParseado = parseInt(id);
    //console.log(`${nombre} ${anioParseado} ${idParseado} ${tipo}`);
    console.log(req.body);

    if(typeof nombre === "string" && (tipo === "pintura" || tipo === "escultura") && typeof anioParseado === "number" && typeof idParseado === "number"){
        next();
    } else {
        res.status(400).json({ error: "Datos mal ingresados" });
    }
};

const validarIdObraDeArte = async (req, res, next) => {
    const id = req.params.id;
    idParseado = parseInt(id);
    if(typeof idParseado === "number"){
        next();
    } else {
        res.status(400).json({ error: "El ID debe ser un entero" });
    }
};

module.exports = {
    validarCreacionObraDeArte,
    validarModificacionObraDeArte,
    validarIdObraDeArte
}