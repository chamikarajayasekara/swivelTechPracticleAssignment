const { MongoClient } = require("mongodb");
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// //check  db url
// if (!MONGODB_URI){
//     throw new  Error("Define the URL")
// }
//
// //check db name
// if (!MONGODB_DB){
//     throw new Error("Define the DB")
// }


let cachedClient = null;
let cachedDb = null;


export async function databaseConnection() {
    try {
        // check the cached.
        if (cachedClient && cachedDb) {
            // load from cache
            return {
                client: cachedClient,
                db: cachedDb,
            };
        }
        // set the connection options
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        // Connect to cluster
        let client = new MongoClient("mongodb+srv://ChamikaraJ:RomataEshop2022@cluster0.vecwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", opts);

        await client.connect();
        let db = client.db("Accesories_Hub");

        // set cache
        cachedClient = client;
        cachedDb = db;

        return {
            client: cachedClient,
            db: cachedDb,
        };

    }catch (e) {
        console.log(e)
    }
}

module.exports = databaseConnection()