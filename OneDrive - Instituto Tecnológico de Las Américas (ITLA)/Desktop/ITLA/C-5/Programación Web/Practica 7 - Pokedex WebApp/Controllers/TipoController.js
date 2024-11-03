const { Op } = require('sequelize');
const Tipo = require('../Models/Tipo');

// List all types
exports.listTipos = async (req, res) => {
    try {
        const tipos = await Tipo.findAll();
        res.render('tipos/MantenimientoTipos', { tipos });
    } catch (error) {
        console.error('Error listing types:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Show form to create a new type
exports.showCreateForm = (req, res) => {
    res.render('tipos/FormTipos', { tipo: null });
};

// Create a new type
exports.createTipo = async (req, res) => {
    try {
        const newTipo = await Tipo.create(req.body);
        res.redirect('/tipos');
    } catch (error) {
        console.error('Error creating type:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Show form to edit an existing type
exports.showEditForm = async (req, res) => {
    try {
        const tipo = await Tipo.findByPk(req.params.id);
        if (tipo) {
            res.render('tipos/FormTipos', { tipo });
        } else {
            res.status(404).send('Type not found');
        }
    } catch (error) {
        console.error('Error showing edit form:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Update an existing type
exports.updateTipo = async (req, res) => {
    try {
        await Tipo.update(req.body, {
            where: { id: req.params.id }
        });
        res.redirect('/tipos');
    } catch (error) {
        console.error('Error updating type:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Delete a type
exports.deleteTipo = async (req, res) => {
    try {
        await Tipo.destroy({
            where: { id: req.params.id }
        });
        res.redirect('/tipos');
    } catch (error) {
        console.error('Error deleting type:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Search types
exports.searchTipos = async (req, res) => {
    try {
        const { name, tipo } = req.query;
        const whereClause = {};

        if (name) {
            whereClause.nombre = {
                [Op.like]: `%${name}%`
            };
        }

        if (tipo) {
            whereClause.id = tipo;
        }

        const tipos = await Tipo.findAll({
            where: whereClause
        });

        res.render('tipos/MantenimientoTipos', { tipos });
    } catch (error) {
        console.error('Error searching types:', error);
        res.status(500).send('Internal Server Error');
    }
};