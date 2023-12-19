import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import ConnectDb from './middleware/DBConnect.js';
import router from './routings/Routing.js';
import morgan from 'morgan';
dotenv.config();
ConnectDb();
const app = express();
app.use(morgan("dev"));
app.use(express.json({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use("/blog", router)
app.listen(9000, () => console.log(`Server running ${process.env.PORT}`))


