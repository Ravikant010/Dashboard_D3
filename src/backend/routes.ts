
import express  from "express";
import { MongoClient } from "mongodb";
export const Route = express.Router()

const DB = async () => {
    const client = await MongoClient.connect(process.env.MONGO_URI as string);
    const db = client.db();
    const collection = db.collection("blackoffer");
    return collection;
  }
  
Route.get("/", async (req, res) => {
    const db = await DB()
    try{
    const jsonData = await db.find().toArray();
  
    res.json(jsonData);
  }
   catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});