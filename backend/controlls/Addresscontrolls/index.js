import expres from 'express';
import { allAddress, createAddress, deleteAddress, editAddress } from './Addresscontrolls.js';
import { verifyToken } from './../../middleware/Tokenverification.js';
const addressrouter = expres.Router();

addressrouter.post("/create", verifyToken, createAddress)
addressrouter.put("/edit/:id", verifyToken, editAddress)
addressrouter.delete("/delete/:id", verifyToken, deleteAddress)
addressrouter.get("/getall", verifyToken, allAddress)

export default addressrouter;