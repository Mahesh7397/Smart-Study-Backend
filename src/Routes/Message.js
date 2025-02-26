const Express=require("express")
const router=Express.Router()
const MesController=require("../controller/Community")



router.route("/notes/result").post(MesController.Createmessage)

module.exports=router