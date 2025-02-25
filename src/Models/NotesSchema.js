const {Schema}=require("mongoose")
const mongoose=require("../configs/Dbconfig")


const NotesSchema=new Schema({
    Sub_Name:{type:String,required:true},
    Sub_Code:{type:String,required:true},
    File_Url:{type:String,required:true},
    Notes_Year:{type:String,required:true}
})

module.exports=mongoose.model("Notes",NotesSchema)