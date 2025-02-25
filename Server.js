const Express=require("express")
const app=Express()
const mongoose=require("./src/configs/Dbconfig")

const PORT=process.env.PORT || 4060

app.get("/",(req,res)=>{
    res.json({message:"hii "})
})

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})