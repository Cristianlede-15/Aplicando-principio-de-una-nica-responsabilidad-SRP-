const express = require('express');
const router = express.Router();
const PokemonController = require('../Controllers/PokemonController');

// CRUD routes for Pokemones
router.get('/', PokemonController.listPokemones);
router.get('/new', PokemonController.newPokemonForm);
router.post('/new', PokemonController.createPokemon);
router.get('/edit/:id', PokemonController.editPokemonForm);
router.post('/edit/:id', PokemonController.updatePokemon);
router.post('/delete/:id', PokemonController.deletePokemon);

// Search route
router.get('/search', PokemonController.searchPokemones);

module.exports = router;