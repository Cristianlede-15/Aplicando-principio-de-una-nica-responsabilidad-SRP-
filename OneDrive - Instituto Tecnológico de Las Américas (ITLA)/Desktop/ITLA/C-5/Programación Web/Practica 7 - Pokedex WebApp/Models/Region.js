const { DataTypes } = require('sequelize');
const Connection = require('../Contexts/AppDbContext');

const Region = Connection.define(
    'Region',
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
        tableName: "regiones"
    }
);

module.exports = Region;