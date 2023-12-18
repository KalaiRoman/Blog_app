import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import ConnectDb from './middleware/DBConnect.js';
dotenv.config();
// db connect
ConnectDb();
const app = express();
app.use(cors())
app.listen(9000, () => {
    console.log("Port Running 9000")
})


