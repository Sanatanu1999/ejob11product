const express=require('express')
const route=express.Router()
const multer=require('multer')

const productController=require('../controller/productController')

const upload=multer.diskStorage({
    filename:(req,file,cb)=>{
        cb(null,Math.floor(Math.random()*999999)+"-"+Date.now()+file.originalname)
    },
    destination:"./public/uploads"
})
const uploadObj=multer({storage:upload})

route.post("/add",uploadObj.single("pAvtar"),productController.addProduct)
route.get('/all',productController.viewAllProducts)
route.get('/show/:pid',productController.viewProductById)
route.put('/update/:pid',productController.updateProductsById)
route.delete('/delete/:pid',productController.deleteProductsById)


module.exports=route

