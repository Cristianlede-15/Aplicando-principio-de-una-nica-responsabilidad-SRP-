const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController');

// Home route: Show all pokemons with their data
router.get('/', HomeController.listPokemones);

// New routes for listing and searching pokemones
router.get('/pokemones/search', HomeController.searchPokemones);

module.exports = router;