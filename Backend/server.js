import express from 'express'
 import dotenv from 'dotenv'
import { ConnectDB } from './DB/connectDb.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';


dotenv.config()
const  app = express();
const port = 8080
ConnectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.use('/api/users',userRoutes)

app.listen (port,()=>{
    console.log (`server is listening on the port ${port}`)
});


