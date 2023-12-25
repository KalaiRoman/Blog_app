import express from 'express';
import { CreateProduct, deleteProduct, editProduct, getAllProduct, getProduct } from './ProductControll.js';
import { verifyToken } from './../../middleware/Tokenverification.js';
const productrouter = express.Router();
productrouter.post("/create", verifyToken, CreateProduct)
productrouter.get("/getsingle/:id", verifyToken, getProduct)
productrouter.get("/getall", verifyToken, getAllProduct)
productrouter.put("/update/:id", verifyToken, editProduct)
productrouter.delete("/delete/:id", verifyToken, deleteProduct)
export default productrouter;