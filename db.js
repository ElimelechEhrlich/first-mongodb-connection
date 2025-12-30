import { config } from "dotenv"
import { MongoClient } from "mongodb"
config()

const client = new MongoClient(process.env.DB_CONNECTION)

await client.connect();

const db = client.db("start_mongo");

console.log("DB connected");
const result = await db.collection("users").insertOne({username: "elimelech"})
console.log(result);

export default db;