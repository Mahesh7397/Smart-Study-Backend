const {Schema}=require("mongoose")
const mongoose=require("../configs/Dbconfig")

const MessageSchema=new Schema({
    Message:{type:String,required:true},
    Type:{type:String,required:true}
})

module.exports=mongoose.model("Message",MessageSchema);