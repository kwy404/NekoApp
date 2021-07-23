const dotenv = require("dotenv");
const mongoClient = require("mongodb").MongoClient;
dotenv.config();

const MongoConnect = async () => {
    const DB = await mongoClient.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const db = await DB.db(process.env.MongoDB)
    return await db
}

module.exports = MongoConnect()