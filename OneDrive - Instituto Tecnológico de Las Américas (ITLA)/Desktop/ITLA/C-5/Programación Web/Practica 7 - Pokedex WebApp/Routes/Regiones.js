const express = require('express');
const router = express.Router();
const RegionController = require('../Controllers/RegionController');

// CRUD routes for Regions
router.get('/', RegionController.listRegions);
router.get('/new', RegionController.showCreateForm);
router.post('/new', RegionController.createRegion);
router.get('/edit/:id', RegionController.showEditForm);
router.post('/edit/:id', RegionController.updateRegion);
router.post('/delete/:id', RegionController.deleteRegion);
router.get('/search', RegionController.searchRegions); // Ruta para manejar la búsqueda

module.exports = router;