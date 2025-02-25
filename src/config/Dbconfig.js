const mongoose=require("mongoose")
require("dotenv").config()

const Mongodb_url=process.env.MONGODB_URL

mongoose.connect(Mongodb_url,
    // {serverSelectionTimeoutMS:5000}
)
mongoose.connection.on("connected",()=>{
    console.log("MondoDb connected")
})
mongoose.connection.on("error",(err)=>{
    console.error(err)
})

exports.model=mongoose