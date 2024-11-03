const express = require('express');
const path = require('path');
const app = express();
const Connection = require('./Contexts/AppDbContext');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

// Static files
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.use('/', require('./Routes/Home'));
app.use('/pokemones', require('./Routes/Pokemones'));
app.use('/regiones', require('./Routes/Regiones'));
app.use('/tipos', require('./Routes/Tipos'));

// Import models
const Pokemon = require('./Models/Pokemon');
const Tipo = require('./Models/Tipo');
const Region = require('./Models/Region');

// Test database connection and sync models
Connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return Connection.sync();
    })
    .then(() => {
        console.log('Models synchronized...');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});