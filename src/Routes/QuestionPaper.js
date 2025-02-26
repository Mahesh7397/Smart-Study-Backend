const Express=require("express")
const router=Express.Router()
const QueController=require("../controller/Questionpaper")


router.route("/questionpaper/key/:key").get(QueController.getkeySearch)
router.route("/questionpaper/result").post(QueController.getSearchresult)
router.route("/questionpaper/add").post(QueController.CreateQuestion)

module.exports=router