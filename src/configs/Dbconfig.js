const mongoose=require("mongoose")

require("dotenv").config()
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const Mongoose_url=process.env.MONGODB_LINK

mongoose.connect(Mongoose_url,clientOptions)

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})

mongoose.connection.on("error",(err)=>{
    console.log(`mongodb connect error:${err}`)
})

module.exports=mongoose