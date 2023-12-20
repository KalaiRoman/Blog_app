import express from 'express';
import { Allblogs, Createblog, Deleteblog, Editblog, Singleblog } from './CreateBlog_Controlls.js';

const blogrouter = express.Router();

blogrouter.post("/create", Createblog)
blogrouter.get("/single/:id", Singleblog)
blogrouter.get("/allblogs", Allblogs)
blogrouter.put("/update/:id", Editblog)
blogrouter.delete("/delete/:id", Deleteblog)

export default blogrouter;