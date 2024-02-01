
import express from 'express';
import { verifyToken } from './../../middleware/Tokenverification.js';
import { createResume, deleteResume, editResume, getAllResume, getSingleResume } from './Resumecontrolls.js';

const Resumerouter = express.Router();

Resumerouter.post("/create", verifyToken, createResume);
Resumerouter.get("/get/:id", verifyToken, getSingleResume);
Resumerouter.get("/getall", verifyToken, getAllResume);
Resumerouter.put("/upadte/:id", verifyToken, editResume);
Resumerouter.delete("/delete/:id", verifyToken, deleteResume);

export default Resumerouter;
