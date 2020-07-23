const repositories = require('../repositories/animalRepositories');

module.exports = {
    async getAll (req, res) {
        const data = await repositories.getAll();
        res.send(data);
    },
}