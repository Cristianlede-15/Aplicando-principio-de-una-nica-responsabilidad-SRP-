const express = require('express');
const router = express.Router();
const TipoController = require('../Controllers/TipoController');

// CRUD routes for Types
router.get('/', TipoController.listTipos);
router.get('/new', TipoController.showCreateForm);
router.post('/new', TipoController.createTipo);
router.get('/edit/:id', TipoController.showEditForm);
router.post('/edit/:id', TipoController.updateTipo);
router.post('/delete/:id', TipoController.deleteTipo);
router.get('/search', TipoController.searchTipos); // Ruta para manejar la búsqueda

module.exports = router;