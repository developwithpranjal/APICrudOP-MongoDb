import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connect from "./config/data.js";

import user from "./model/user.js";
import router from "./routes/userRouter.js";


const app = express();
app.use(express.json());

await connect()

app.use("/api",router)

//fake data from Mockaroo website


app.listen(8000, () => console.log("server has started"));