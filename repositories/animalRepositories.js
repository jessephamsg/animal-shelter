const db = require('../db/db');
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    async getAll () {
        const data = await db.animals.find().toArray();
        return data
    },
    async getOne (index) {
        const data = await db.animals.find({
            _id: ObjectId(index)
        }).toArray();
        return data
    },
    async updateOne (index, updatedObject) {
        const data = await db.animals.updateOne({
            _id: ObjectId(index)
        }, {
            $set: {
                name: updatedObject.name,
                type: updatedObject.type,
                dob: updatedObject.dob,
                description: updatedObject.description,
                isSterilised: updatedObject.isSterilised,
                isMicrochipped: updatedObject.isMicrochipped,
                isVaccinated: updatedObject.isVaccinated,
                isHDBApproved: updatedObject.isHDBApproved,
                gender: updatedObject.gender
            }
        })
        return data
    },
    async createOne (newObject) {
        try {
            const data = await db.animals.insertOne({
                name: newObject.name,
                type: newObject.type,
                dob: newObject.dob,
                description: newObject.description,
                isSterilised: newObject.isSterilised,
                isMicrochipped: newObject.isMicrochipped,
                isVaccinated: newObject.isVaccinated,
                isHDBApproved: newObject.isHDBApproved,
                gender: newObject.gender,
                img: newObject.img,
            });
            const result = data.ops[0];
            return result
        } catch {
            console.log('failed to add')
        }
    },
    async deleteOne (index) {
        try {
            const data = await db.animals.deleteOne({
                _id: ObjectId(index)
            });
            const result = await db.animals.find();
            return result
        } catch {
            console.log('failed to delete')
        }
    }
}