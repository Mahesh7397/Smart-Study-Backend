const Express=require("express")
const app=Express()
const QuestionPaper=require("./src/Routes/QuestionPaper")
const Notes=require("./src/Routes/Notes")
const Message=require("./src/Routes/Message")
const PORT=process.env.PORT || 4060

const bodyParser = require('body-parser') 

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/resource",QuestionPaper,Notes)
app.use("/api",Message)

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})