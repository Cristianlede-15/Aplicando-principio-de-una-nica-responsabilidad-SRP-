const Sequelize = require('sequelize');
const path = require('path');

const Connection = new Sequelize("sqlite::memory:",
  {
    dialect: 'sqlite',
    storage: path.join(path.dirname(require.main.filename), 'DataBase', 'PokedexDb.sqlite'),
  });
module.exports = Connection;
