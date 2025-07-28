import express from 'express';
import fileRoute from './routes.js';
const app=express();

app.use(express.json());

app.use('/api',fileRoute);




app.listen(3000,()=>{
    console.log("PORT RUNNING");
})