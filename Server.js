const Express=require("express")
const app=Express()
const Mongoose=require("./src/config/Dbconfig")

const PORT=process.env.PORT || 6768


app.listen(PORT,()=>{
    console.log("Server is started")
})