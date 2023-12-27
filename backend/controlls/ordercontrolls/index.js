import express from 'express';
import { verifyToken } from './../../middleware/Tokenverification.js';
import { allorder, createOrder, updateorder } from './Ordercontrolls.js';
const orderrouter = express.Router();
orderrouter.post("/create", verifyToken, createOrder)
orderrouter.put("/update/:id", verifyToken, updateorder)
orderrouter.get("/allorders", verifyToken, allorder)

export default orderrouter;