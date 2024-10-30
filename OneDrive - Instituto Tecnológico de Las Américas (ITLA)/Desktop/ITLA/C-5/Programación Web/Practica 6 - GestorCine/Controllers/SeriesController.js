const Serie = require('../Models/Serie');
const Genero = require('../Models/Genero'); 

const SeriesController = {
    list: (req, res) => {
        const series = Serie.getAll();
        const generos = Genero.getAll();
        res.render('series', { series, generos });
    },
    create: (req, res) => {
        Serie.create(req.body);
        res.redirect('/series');
    },
    edit: (req, res) => {
        const serie = Serie.findById(req.params.id);
        res.render('editSerie', { serie });
    },
    update: (req, res) => {
        Serie.update(req.params.id, req.body);
        res.redirect('/series');
    },
    delete: (req, res) => {
        Serie.delete(req.params.id);
        res.redirect('/series');
    },
};

module.exports = SeriesController;