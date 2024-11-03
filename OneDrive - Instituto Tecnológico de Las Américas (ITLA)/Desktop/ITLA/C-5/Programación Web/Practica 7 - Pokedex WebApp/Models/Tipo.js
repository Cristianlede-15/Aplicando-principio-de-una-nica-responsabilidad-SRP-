const { DataTypes } = require('sequelize');
const Connection = require('../Contexts/AppDbContext');

const Tipo = Connection.define(
    'Tipo',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: "tipos"
    }
);

module.exports = Tipo;