const mongoose=require('mongoose')
const dbConnection=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to mongodb database");
    }catch(error){
        console.log(`error in mongodb database ${error}`);
    }
}
module.exports=dbConnection