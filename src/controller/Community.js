const Message = require("../Models/PublicChatSchema")


const Createmessage=async(req,res)=>{
    try {
        const data=req.body
        const responce=await new Message(data).save() 
        const resmes=await Message.find({})
        res.status(200).json({message:resmes})
    } catch (error) {
        res.status(400).json({message:error})
    }
}

module.exports={Createmessage}