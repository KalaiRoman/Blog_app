import express from 'express';
import upload from '../../middleware/Multerurl.js';
import { createCsv } from './CsvControlls.js';

const csv_router = express.Router();
csv_router.post("/create", upload.single("csv"), createCsv);

export default csv_router;