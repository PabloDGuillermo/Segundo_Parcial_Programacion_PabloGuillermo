const ObraDeArte = require("../models/ObraDeArte");

const CrearObraDeArte = async (req, res) => {
    try {
        const { nombre, anioDeCreacion, tipo } = req.body;
        const imagen = req.file.filename;

        console.log(`${nombre} ${anioDeCreacion} ${tipo} ${imagen}`);

        if(!nombre || !anioDeCreacion || !tipo || !imagen){
            res.status(400).json({ error: "Faltan datos" });
        } else {
            const nuevaObraDeArte = await ObraDeArte.create({ nombre, anioDeCreacion, tipo, imagen });
            res.status(201).json({ nuevaObraDeArte, msg: "Obra de arte creada con éxito" });
        }
    } catch (error) {
        res.status(500).json( { error: "Error al crear la obra de arte" } );
    }
};

const obtenerObrasDeArte = async (req, res) => {
    try {
        const listadoObrasDeArte = await ObraDeArte.findAll();

        res.render("odaVista", {obras: listadoObrasDeArte});
    } catch (error) {
        res.status(500).json( { error: "Error al obtener las obras de arte" } );
    }
};

const modificarObraDeArte = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, anioDeCreacion, tipo } = req.body;

        const obraDeArte = await ObraDeArte.findByPk(id);

        if(!obraDeArte){
            res.status(404).json({ error: "Obra de arte no encontrada" });
        } else {
            obraDeArte.update({ nombre, anioDeCreacion, tipo });
            res.status(200).json({ msg: "Obra de arte modificada con éxito" });
        }
    } catch (error) {
        res.status(500).json( { error: "Error al modificar la obra de arte" } );
    }
};

const eliminarObraDeArte = async (req, res) => {
try {
    const id = req.params.id;

    const obraDeArte = await ObraDeArte.findByPk(id);

    if(!obraDeArte){
        res.status(404).json({ error: "Obra de arte no encontrada" });
    } else {
        obraDeArte.update({ activo: false });
        res.status(200).json({ msg: "Obra de arte eliminada con éxito" });
    }
} catch (error) {
    res.status(500).json( { error: "Error al eliminar la obra de arte" } );
}
};

const activarObraDeArte = async (req, res) => {
    try {
        const id = req.params.id;
    
        const obraDeArte = await ObraDeArte.findByPk(id);
    
        if(!obraDeArte){
            res.status(404).json({ error: "Obra de arte no encontrada" });
        } else {
            obraDeArte.update({ activo: true });
            res.status(200).json({ msg: "Obra de arte activada con éxito" });
        }
    } catch (error) {
        res.status(500).json( { error: "Error al eliminar la obra de arte" } );
    }
    };

module.exports = {
    CrearObraDeArte,
    obtenerObrasDeArte,
    modificarObraDeArte,
    eliminarObraDeArte,
    activarObraDeArte
}