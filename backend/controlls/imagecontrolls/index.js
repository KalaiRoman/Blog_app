import express from 'express';

import { ImageCreate } from './Image_controlls.js';
import upload from '../../middleware/Multerurl.js';




const image_router = express.Router();
image_router.post("/", upload.single("image"), ImageCreate)
export default image_router;