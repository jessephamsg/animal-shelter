const {MongoClient} = require('mongodb');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = 'animal-shelter';
const COLLECTION = 'animals';

const client = new MongoClient(MONGO_URI, {useUnifiedTopology: true});

module.exports = {
   async connect () {
        const connection = await client.connect();
        console.log('Connected to Mongo');
        const db = connection.db(DB_NAME);
        this.animals = db.collection(COLLECTION);
    },
    disconnect () {
        return client.close();
    }
}