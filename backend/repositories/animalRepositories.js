const db = require('../db/db');

module.exports = {
    async getAll () {
        const data = await db.animals.find().toArray();
        return data
    }
}