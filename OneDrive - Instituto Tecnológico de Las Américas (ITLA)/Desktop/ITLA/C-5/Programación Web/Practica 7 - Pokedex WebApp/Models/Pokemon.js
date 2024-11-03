const { DataTypes } = require('sequelize');
const Connection = require('../Contexts/AppDbContext');
const Tipo = require('./Tipo');
const Region = require('./Region');

const Pokemon = Connection.define(
    'Pokemon',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        tipo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Tipo,
                key: 'id'
            }
        },
        region_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Region,
                key: 'id'
            }
        },
        url_imagen: {
            type: DataTypes.STRING(500)
        }
    },
    {
        timestamps: false,
        tableName: "pokemones"
    }
);

// Definir asociaciones
Pokemon.belongsTo(Tipo, { foreignKey: 'tipo_id' });
Pokemon.belongsTo(Region, { foreignKey: 'region_id' });

module.exports = Pokemon;