require('dotenv').config()
const express =require('express')
const appServer=express()
const cors=require('cors')
const mongoose=require('mongoose')
const dbConnection=require('./database/db')
const PORT=process.env.PORT||2345

dbConnection()
const productRouter=require('./router/productRouter')
appServer.use(express.urlencoded({extended:true}))
appServer.use(express.json());

appServer.use(cors())
appServer.use(productRouter)

appServer.use((req,res)=>{
    res.send("<h1>page not found</h1");
  })
appServer.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})

