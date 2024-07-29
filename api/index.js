import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("mongodb connected"))
const app = express();

app.listen(3000,()=>console.log(`Server started running at server 3000`))