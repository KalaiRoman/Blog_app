import express from 'express';
import authrouter from '../controlls/authcontrolls/index.js';
import blogrouter from '../controlls/createblogcontrolls/index.js';
import addressrouter from '../controlls/Addresscontrolls/index.js';

const router = express.Router();


//auth router


router.use("/auth", authrouter);
router.use("/blog", blogrouter);
router.use("/address", addressrouter);





export default router;


