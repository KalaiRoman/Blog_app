import express from 'express';
import authrouter from '../controlls/authcontrolls/index.js';

const router = express.Router();


//auth router


router.use("/auth", authrouter);



export default router;


