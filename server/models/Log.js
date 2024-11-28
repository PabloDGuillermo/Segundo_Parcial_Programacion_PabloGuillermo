const { DataTypes } = require('sequelize');
const sequelize = require("../db/conexionBaseDeDatos");

const Log = sequelize.define('Log', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ruta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  metodo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'logs',
  timestamps: true,
  createdAt: 'creadoEn',
  updatedAt: false
});

module.exports = Log;