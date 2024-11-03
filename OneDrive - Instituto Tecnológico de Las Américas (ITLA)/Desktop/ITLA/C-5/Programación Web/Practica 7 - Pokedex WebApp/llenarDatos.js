const sequelize = require('./Contexts/AppDbContext');
const Tipo = require('./Models/Tipo');
const Region = require('./Models/Region');
const Pokemon = require('./Models/Pokemon');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });

        // Insertar tipos
        const tipos = await Tipo.bulkCreate([
            { nombre: 'Planta' },
            { nombre: 'Fuego' },
            { nombre: 'Agua' },
            { nombre: 'Normal' },
            { nombre: 'Eléctrico' },
            { nombre: 'Hielo' },
            { nombre: 'Lucha' },
            { nombre: 'Veneno' },
            { nombre: 'Tierra' },
            { nombre: 'Volador' },
            { nombre: 'Psíquico' },
            { nombre: 'Bicho' },
            { nombre: 'Roca' },
            { nombre: 'Fantasma' },
            { nombre: 'Dragón' },
            { nombre: 'Siniestro' },
            { nombre: 'Acero' },
            { nombre: 'Hada' }
        ]);

        // Insertar regiones
        const regiones = await Region.bulkCreate([
            { nombre: 'Kanto' },
            { nombre: 'Johto' },
            { nombre: 'Hoenn' },
            { nombre: 'Sinnoh' },
            { nombre: 'Teselia' },
            { nombre: 'Kalos' },
            { nombre: 'Alola' },
            { nombre: 'Galar' }
        ]);

        // Insertar pokemones
        const pokemones = await Pokemon.bulkCreate([
            {
                nombre: 'Pikachu',
                tipo_id: tipos.find(t => t.nombre === 'Eléctrico').id,
                region_id: regiones.find(r => r.nombre === 'Kanto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
            },
            {
                nombre: 'Gyarados',
                tipo_id: tipos.find(t => t.nombre === 'Agua').id,
                region_id: regiones.find(r => r.nombre === 'Kanto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png'
            },
            {
                nombre: 'Lucario',
                tipo_id: tipos.find(t => t.nombre === 'Lucha').id,
                region_id: regiones.find(r => r.nombre === 'Sinnoh').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png'
            },
            {
                nombre: 'Garchomp',
                tipo_id: tipos.find(t => t.nombre === 'Dragón').id,
                region_id: regiones.find(r => r.nombre === 'Sinnoh').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/445.png'
            },
            {
                nombre: 'Zoroark',
                tipo_id: tipos.find(t => t.nombre === 'Siniestro').id,
                region_id: regiones.find(r => r.nombre === 'Teselia').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/571.png'
            },
            {
                nombre: 'Hydreigon',
                tipo_id: tipos.find(t => t.nombre === 'Dragón').id,
                region_id: regiones.find(r => r.nombre === 'Teselia').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/635.png'
            },
            {
                nombre: 'Gengar',
                tipo_id: tipos.find(t => t.nombre === 'Fantasma').id,
                region_id: regiones.find(r => r.nombre === 'Kanto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'
            },
            {
                nombre: 'Sceptile',
                tipo_id: tipos.find(t => t.nombre === 'Planta').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/254.png'
            },
            {
                nombre: 'Charizard',
                tipo_id: tipos.find(t => t.nombre === 'Fuego').id,
                region_id: regiones.find(r => r.nombre === 'Kanto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
            },
            {
                nombre: 'Metagross',
                tipo_id: tipos.find(t => t.nombre === 'Acero').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png'
            },
            {
                nombre: 'Greninja',
                tipo_id: tipos.find(t => t.nombre === 'Agua').id,
                region_id: regiones.find(r => r.nombre === 'Kalos').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png'
            },
            {
                nombre: 'Tyranitar',
                tipo_id: tipos.find(t => t.nombre === 'Roca').id,
                region_id: regiones.find(r => r.nombre === 'Johto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png'
            },
            {
                nombre: 'Gardevoir',
                tipo_id: tipos.find(t => t.nombre === 'Psíquico').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png'
            },
            {
                nombre: 'Dragonite',
                tipo_id: tipos.find(t => t.nombre === 'Dragón').id,
                region_id: regiones.find(r => r.nombre === 'Kanto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png'
            },
            {
                nombre: 'Blaziken',
                tipo_id: tipos.find(t => t.nombre === 'Fuego').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/257.png'
            },
            {
                nombre: 'Mewtwo',
                tipo_id: tipos.find(t => t.nombre === 'Psíquico').id,
                region_id: regiones.find(r => r.nombre === 'Kanto').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png'
            },
            {
                nombre: 'Milotic',
                tipo_id: tipos.find(t => t.nombre === 'Agua').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png'
            },
            {
                nombre: 'Salamence',
                tipo_id: tipos.find(t => t.nombre === 'Dragón').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/373.png'
            },
            {
                nombre: 'Volcarona',
                tipo_id: tipos.find(t => t.nombre === 'Bicho').id,
                region_id: regiones.find(r => r.nombre === 'Teselia').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/637.png'
            },
            {
                nombre: 'Aggron',
                tipo_id: tipos.find(t => t.nombre === 'Acero').id,
                region_id: regiones.find(r => r.nombre === 'Hoenn').id,
                url_imagen: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/306.png'
            }
        ]);

        console.log('Base de datos poblada con éxito');
    } catch (error) {
        console.error('Error al poblar la base de datos:', error);
    } finally {
        await sequelize.close();
    }
};

seedDatabase();