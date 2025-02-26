
const Notes = require("../Models/NotesSchema")
const NotesService=require("../Service/Notes")


const getkeySearch=async(req,res)=>{
    try {
        const key=req.params["key"]
        console.log(key)
        const responce=await NotesService.getalldatakeys(key)
        console.log(responce)
        if(!responce.length) {
            res.status(404).json({message:"Result not found"})
        }
        else{
            res.status(200).json({data:responce})
        }
    } catch (err) {
        res.status(400).json({message:"Server Error",Error:err})
    }
}

const getSearchresult=async(req,res)=>{
    try {
        const data=req.body
        const responce=await NotesService.getsearchresult(data)
        if(typeof(responce)===Array){
            res.status(200).json({data:responce})
        }else{
            res.status(200).json({data:[responce]})
        }
    } catch (error) {
        res.status(400).json({message:"Server Error",Error:err})
    }
}

const CreateQuestion=async(req,res)=>{
    try {
        const data=req.body
        console.log(data)
        for(let i=0;i<data.length;i++){
           const responce=await new Notes(data[i]).save() 
        }
        res.json({message:"added"})
    } catch (error) {
        res.json({message:error})
    }
}

module.exports={getkeySearch,getSearchresult,CreateQuestion}