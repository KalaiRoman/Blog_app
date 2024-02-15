import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import ConnectDb from './middleware/DBConnect.js';
import router from './routings/Routing.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { notFound, errorMiddleware } from './middleware/errorMiddleware.js';
dotenv.config();
ConnectDb();
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors("*"))
app.use(cookieParser());
// error handler


app.use("/blog", router);
app.use(notFound);
app.use(errorMiddleware)
app.listen(9000, () => console.log(`Server running ${process.env.PORT}`))


