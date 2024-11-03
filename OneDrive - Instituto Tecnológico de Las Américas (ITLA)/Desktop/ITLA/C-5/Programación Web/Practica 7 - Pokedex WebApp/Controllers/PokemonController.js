const Pokemon = require('../Models/Pokemon');
const Tipo = require('../Models/Tipo'); // Importa el modelo Tipo
const Region = require('../Models/Region'); // Importa el modelo Region
const { Op } = require('sequelize');

// List all pokemones
exports.listPokemones = async (req, res) => {
    try {
        const pokemones = await Pokemon.findAll({ include: [Tipo, Region] });
        const regiones = await Region.findAll();
        res.render('Pokemon/MantenimientoPokemones', { pokemones, regiones });
    } catch (error) {
        console.error('Error al obtener los pokemones:', error);
        res.status(500).send('Error al obtener los pokemones');
    }
};

// Render form to create a new pokemon
exports.newPokemonForm = async (req, res) => {
    try {
        const tipos = await Tipo.findAll();
        const regiones = await Region.findAll();
        res.render('Pokemon/FormPokemones', { tipos, regiones, pokemon: null });
    } catch (error) {
        console.error('Error al obtener los datos para el formulario:', error);
        res.status(500).send('Error al obtener los datos para el formulario');
    }
};

// Create a new pokemon
// Create a new pokemon
// Create a new pokemon
// Create a new pokemon
exports.createPokemon = async (req, res) => {
    try {
        const { nombre, url_imagen, tipo, region } = req.body;

        // Verificar que los nombres no sean undefined
        if (!tipo || !region) {
            return res.status(400).send('Tipo y Región son requeridos');
        }

        // Obtener el ID del tipo
        const tipoObj = await Tipo.findOne({ where: { id: tipo } });
        if (!tipoObj) {
            return res.status(400).send(`Tipo no encontrado: ${tipo}`);
        }

        // Obtener el ID de la región
        const regionObj = await Region.findOne({ where: { id: region } });
        if (!regionObj) {
            return res.status(400).send(`Región no encontrada: ${region}`);
        }

        // Crear el nuevo Pokémon
        const newPokemon = await Pokemon.create({
            nombre: nombre,
            url_imagen: url_imagen,
            tipo_id: tipoObj.id,
            region_id: regionObj.id
        });

        res.redirect('/pokemones');
    } catch (error) {
        console.error('Error creating pokemon:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Render form to edit an existing pokemon
exports.editPokemonForm = async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        const tipos = await Tipo.findAll();
        const regiones = await Region.findAll();
        if (!pokemon) {
            return res.status(404).send('Pokemon not found');
        }
        res.render('Pokemon/FormPokemones', { title: 'Editar Pokemon', pokemon, tipos, regiones });
    } catch (error) {
        console.error('Error fetching pokemon:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update an existing pokemon
exports.updatePokemon = async (req, res) => {
    try {
        await Pokemon.update(req.body, {
            where: { id: req.params.id }
        });
        res.redirect('/pokemones');
    } catch (error) {
        console.error('Error updating pokemon:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Delete a pokemon
exports.deletePokemon = async (req, res) => {
    try {
        await Pokemon.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/pokemones');
    } catch (error) {
        console.error('Error deleting pokemon:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Search pokemones by name
exports.searchPokemones = async (req, res) => {
    const { name } = req.query;
    try {
        const pokemones = await Pokemon.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        res.render('Pokemon/index', { title: 'Resultados de Búsqueda', pokemones });
    } catch (error) {
        console.error('Error searching pokemones:', error);
        res.status(500).send('Internal Server Error');
    }
};