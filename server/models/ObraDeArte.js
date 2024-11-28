const { DataTypes } = require('sequelize');
const sequelize = require("../db/conexionBaseDeDatos");

const ObraDeArte = sequelize.define('ObraDeArte', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    anioDeCreacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['pintura', 'escultura']],
                msg: 'El tipo debe ser pintura o escultura.',
            },
        },
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    tableName: 'obrasdearte',
    timestamps: true,
    createdAt: 'creadoEn',
    updatedAt: 'modificadoEn',
});

module.exports = ObraDeArte;
