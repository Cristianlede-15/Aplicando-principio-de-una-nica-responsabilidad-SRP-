const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../Data/Series.json');

class Serie {
    static getAll() {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }

    static findById(id) {
        const series = this.getAll();
        return series.find(s => s.ID == id);
    }

    static update(id, updatedSerie) {
        const series = this.getAll();
        const index = series.findIndex(s => s.ID == id);
        if (index !== -1) {
            series[index] = { ...series[index], ...updatedSerie };
            fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
            return series[index];
        }
        return null;
    }

    static create(newSerie) {
        const series = this.getAll();
        newSerie.ID = series.length ? series[series.length - 1].ID + 1 : 1;
        series.push(newSerie);
        fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
    }

    static delete(id) {
        let series = this.getAll();
        series = series.filter(s => s.ID != id);
        fs.writeFileSync(filePath, JSON.stringify(series, null, 2));
    }
}

module.exports = Serie;