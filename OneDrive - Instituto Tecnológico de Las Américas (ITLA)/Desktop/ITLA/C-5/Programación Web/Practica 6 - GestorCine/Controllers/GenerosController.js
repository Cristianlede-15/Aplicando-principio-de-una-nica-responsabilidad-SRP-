const Genero = require('../Models/Genero');

const GenerosController = {
    list: (req, res) => {
        const generos = Genero.getAll();
        res.render('generos', { generos });
    },
    detail: (req, res) => {
        const genero = Genero.findById(req.params.id);
        if (genero) {
            res.render('generoDetail', { genero });
        } else {
            res.status(404).send('Género no encontrado');
        }
    },
    edit: (req, res) => {
        const genero = Genero.findById(req.params.id);
        if (genero) {
            res.render('editGenero', { genero });
        } else {
            res.status(404).send('Género no encontrado');
        }
    },
    update: (req, res) => {
        const updatedGenero = Genero.update(req.params.id, req.body);
        if (updatedGenero) {
            res.redirect('/generos');
        } else {
            res.status(404).send('Género no encontrado');
        }
    },
    create: (req, res) => {
        Genero.create(req.body);
        res.redirect('/generos');
    },
    delete: (req, res) => {
        const deletedGenero = Genero.delete(req.params.id);
        if (deletedGenero) {
            res.redirect('/generos');
        } else {
            res.status(404).send('Género no encontrado');
        }
    }
};

module.exports = GenerosController;