const mongoose=require("mongoose")

require("dotenv").config()

mongoose.connect(process.env.MONGODB_LINK,{
    serverSelectionTimeoutMS:5000
})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})

mongoose.connection.on("error",(err)=>{
    console.log(`mongodb connect error:${err}`)
})

module.exports=mongoose