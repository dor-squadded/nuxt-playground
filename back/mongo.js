const { MongoClient } = require("mongodb");
const dbURI = 'mongodb+srv://dor-kuperman:iii@dorcluster.o1bws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(dbURI);

let globalDb;
const runMongo = async () => {
    await client.connect();
    globalDb = client.db('test');
}
module.exports = {
    runMongo,
    getDb: function () {
        return globalDb;
    }
}