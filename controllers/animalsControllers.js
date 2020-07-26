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
    },
    async updateOne (req, res) {
        const updatedData = req.body;
        const index = req.params.index;
        let updatedObject = null;
        for (const data of updatedData) {
            if(data._id === index) {
                updatedObject = data
            }
        }
        try {
            const data = await repositories.updateOne(index, updatedObject);
            res.send(data)
        } catch {
            res.send('failed to update')
        }
    },
    async createOne (req, res) {
        const newAnimal = req.body;
        try {
            const data = await repositories.createOne(newAnimal);
            res.send(data);
        } catch {
            res.send('failed to create');
        }
    },
    async deleteOne (req, res) {
        const index = req.params.index;
        try {
            const data = await repositories.deleteOne(index);
            res.send(data)
        } catch {
            res.send('failed to delete')
        }
    }
}