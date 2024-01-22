import express from 'express';
import { verifyToken } from './../../middleware/Tokenverification.js';
import { createCart, deleteCart, getCart, updatecartQuantity, updatecartreduceQuantity } from './Cartcontrolls.js';

const cartrouter = express.Router();

cartrouter.post("/create", verifyToken, createCart)
cartrouter.get("/get", verifyToken, getCart)
cartrouter.put("/updateinc/:id", verifyToken, updatecartQuantity);
cartrouter.put("/updatedec/:id", verifyToken, updatecartreduceQuantity);


cartrouter.delete("/delete/:id", verifyToken, deleteCart)

export default cartrouter;