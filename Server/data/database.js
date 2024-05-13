const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
let database;

async function connect(){
let client = await MongoClient.connect('mongodb://localhost:27017');
database = client.db('Chat-Application');
}

function getDb(){
    if(!database) throw {message: "Database not connected!"};
    return database;
}

module.exports = {
    connectToDatabase : connect,
    getDb : getDb
};
