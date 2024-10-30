const series = require('../Data/Series.json');
const generos = require('../Data/Generos.json');

const HomeController = {
    home: (req, res) => {
        const seriesWithGeneros = series.map(serie => {
            const genero = generos.find(g => g.ID === serie.Genero);
            return { ...serie, GeneroNombre: genero ? genero.Nombre : 'Desconocido' };
        });
        res.render('home', { series: seriesWithGeneros, generos });
    },
    serieDetail: (req, res) => {
        const serie = series.find(s => s.ID == req.params.id);
        if (serie) {
            const genero = generos.find(g => g.ID == serie.Genero);
            res.render('SeriesDetails', { serie, genero });
        } else {
            res.status(404).send('Serie no encontrada');
        }
    },
    search: (req, res) => {
        const searchTerm = req.query.q ? req.query.q.toLowerCase() : '';
        const generoId = req.query.genero ? parseInt(req.query.genero) : null;
        const filteredSeries = series.filter(s => {
            const matchesName = searchTerm ? s.Nombre.toLowerCase().includes(searchTerm) : true;
            const matchesGenero = generoId ? s.Genero === generoId : true;
            return matchesName && matchesGenero;
        });
        res.render('home', { series: filteredSeries, generos });
    },
};

module.exports = HomeController;