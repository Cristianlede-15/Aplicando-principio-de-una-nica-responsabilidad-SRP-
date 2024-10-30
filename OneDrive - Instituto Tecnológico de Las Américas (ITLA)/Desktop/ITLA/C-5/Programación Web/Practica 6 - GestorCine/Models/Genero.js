const fs = require('fs');
const path = require('path');

const generosPath = path.join(__dirname, '../Data/Generos.json');

const getGeneros = () => {
    const data = fs.readFileSync(generosPath, 'utf-8');
    return JSON.parse(data);
};

const saveGeneros = (generos) => {
    fs.writeFileSync(generosPath, JSON.stringify(generos, null, 2));
};

const Genero = {
    getAll: () => {
        return getGeneros();
    },
    findById: (id) => {
        const generos = getGeneros();
        return generos.find(genero => genero.ID === Number(id));
    },
    create: (data) => {
        const generos = getGeneros();
        const newGenero = {
            ID: generos.length > 0 ? generos[generos.length - 1].ID + 1 : 1,
            Nombre: data.Nombre,
            ImageURL: data.ImageURL || 'default-image-url.jpg'
        };
        generos.push(newGenero);
        saveGeneros(generos);
        return newGenero;
    },
    update: (id, data) => {
        const generos = getGeneros();
        const index = generos.findIndex(genero => genero.ID === Number(id));
        if (index !== -1) {
            generos[index] = { ...generos[index], ...data };
            saveGeneros(generos);
            return generos[index];
        }
        return null;
    },
    delete: (id) => {
        let generos = getGeneros();
        const index = generos.findIndex(genero => genero.ID === Number(id));
        if (index !== -1) {
            const [deletedGenero] = generos.splice(index, 1);
            saveGeneros(generos);
            return deletedGenero;
        }
        return null;
    }
};

module.exports = Genero;