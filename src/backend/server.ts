import express, { NextFunction, Response } from "express"
import * as dotenv from "dotenv"
import { Route } from "./routes"
import cors from "cors"
import { MongoClient } from "mongodb"
dotenv.config({path: "/root/blackoffer/.env"})


const app = express()
dotenv.config({path: "/root/Downloads/ringer/.env"})
console.log(process.env.PORT)

process.env.MONGO_URI as string

app.use(express.json())
app.use(cors({origin: "http://localhost:8081"}));

app.use(Route);
app.listen(process.env.PORT || 8080, ()=>console.log('listening on port', process.env.PORT))
