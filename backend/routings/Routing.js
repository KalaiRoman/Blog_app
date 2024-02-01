import express from 'express';
import authrouter from '../controlls/authcontrolls/index.js';
import blogrouter from '../controlls/createblogcontrolls/index.js';
import addressrouter from '../controlls/Addresscontrolls/index.js';
import productrouter from '../controlls/productcontrolls/index.js';
import favortrouter from '../controlls/favortscontrolls/index.js';
import orderrouter from '../controlls/ordercontrolls/index.js';
import cartrouter from '../controlls/Cartcontrolls/index.js';
import Resumerouter from '../controlls/ResumeControlls/index.js';
const router = express.Router();
//auth router
router.use("/auth", authrouter);
router.use("/blog", blogrouter);
router.use("/address", addressrouter);
router.use("/product", productrouter);
router.use("/favort", favortrouter);
router.use("/order", orderrouter);
router.use("/cart", cartrouter);
router.use("/resume", Resumerouter);




export default router;


