const express = require('express');
const router = express.Router();
const HomeController = require('../Controllers/HomeController');
const SeriesController = require('../Controllers/SeriesController');
const GenerosController = require('../Controllers/GenerosController');

// Rutas para Home
router.get('/', HomeController.home);
router.get('/serie/:id', HomeController.serieDetail);
router.get('/search', HomeController.search);

// Rutas para Series
router.get('/series', SeriesController.list);
router.get('/series/new', (req, res) => {
    const generos = require('../Data/Generos.json');
    res.render('newSerie', { generos });
});
router.post('/series', SeriesController.create);
router.get('/series/:id/edit', SeriesController.edit);
router.put('/series/:id', SeriesController.update);
router.delete('/series/:id', SeriesController.delete);

// Rutas para Géneros
router.get('/generos', GenerosController.list);
router.get('/generos/new', (req, res) => res.render('newGenero'));
router.post('/generos', GenerosController.create);
router.get('/generos/:id', GenerosController.detail);
router.get('/generos/:id/edit', GenerosController.edit);
router.put('/generos/:id', GenerosController.update);
router.delete('/generos/:id', GenerosController.delete);

module.exports = router;