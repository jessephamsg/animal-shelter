const repositories = require('../repositories/animalRepositories');

module.exports = {
    async getAll (req, res) {
        try {
            const data = await repositories.getAll();
            res.send(data);
        } catch {
            res.send(`failed to fetch data`);
        }
    },
    async getOne (req, res) {
        const index = req.params.index;
        try {
            const data = await repositories.getOne(index);
            res.send(data);
        } catch {
            res.send(`failed to fetch objectID ${index}`);
        }
    }
}