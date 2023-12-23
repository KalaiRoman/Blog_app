import express from 'express';
import { Allblogs, Createblog, Deleteblog, Editblog, Singleblog, AllblogsforCurrentUser, Filterblog, PostCommeandcreate, PostCommanDelete } from './CreateBlog_Controlls.js';
import { verifyToken } from './../../middleware/Tokenverification.js';

const blogrouter = express.Router();

blogrouter.post("/create", Createblog)
blogrouter.get("/single/:id", Singleblog)
blogrouter.get("/allblogs", Allblogs)
blogrouter.get("/allblogs/currentuser/:id", AllblogsforCurrentUser)
blogrouter.put("/update/:id", Editblog)
blogrouter.delete("/delete/:id", verifyToken, Deleteblog)
blogrouter.get("/filter/:id", Filterblog)
blogrouter.put("/commandcreate/:id", verifyToken, PostCommeandcreate)
blogrouter.post("/commandelete/:id", verifyToken, PostCommanDelete)


export default blogrouter;