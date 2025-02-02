import express from 'express';
import mongoose from "mongoose"
import dotenv from 'dotenv';
import cors from "cors";
import bcryptjs from "bcryptjs";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.port || 4000;
const URL = process.env.URL;

try{
 mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 });
 console.log("connected to MongoDB");
}catch(error){
console.log(error);
}

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})