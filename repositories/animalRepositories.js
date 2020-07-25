const db = require('../db/db');
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    async getAll () {
        const data = await db.animals.find().toArray();
        return data
    },
    async getOne (index) {
        console.log(index);
        const data = await db.animals.find({
            _id: ObjectId(index)
        }).toArray();
        console.log(data);
        return data
    }
}