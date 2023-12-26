import express from 'express';
import { verifyToken } from './../../middleware/Tokenverification.js';
import { Allfavorts, createfavorts, deletefavorts } from './Favortscontrolls.js';
const favortrouter = express.Router();
favortrouter.post("/create", verifyToken, createfavorts)
favortrouter.get("/all", verifyToken, Allfavorts)
favortrouter.delete("/delete/:id", verifyToken, deletefavorts)

export default favortrouter;