import express from 'express';
const fileRoute=express.Router();
import multer from 'multer';
import { ConvertCompression } from './controller.js';
const upload = multer({ storage: multer.memoryStorage() });



fileRoute.post('/uploadFile',upload.single('file'),ConvertCompression);






export default fileRoute;

