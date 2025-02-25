const {Schema}=require("mongoose")
const mongoose=require("../configs/Dbconfig")

const QuestionPaperSchema=new Schema({
    Sub_Name:{type:String,required:true},
    Sub_Code:{type:String,required:true},
    File_Url:{type:String,required:true},
    Question_Paper_Year:{type:String,required:true}
})

module.exports=mongoose.model("QuestionPaper",QuestionPaperSchema);