import express from 'express';
import { CreateProduct, deleteProduct, editProduct, getAllProduct, getProduct } from './ProductControll.js';
const productrouter = express.Router();
productrouter.post("/create", CreateProduct)
productrouter.get("/getsingle/:id", getProduct)
productrouter.get("/getall", getAllProduct)
productrouter.put("/update/:id", editProduct)
productrouter.delete("/delete/:id", deleteProduct)
export default productrouter;