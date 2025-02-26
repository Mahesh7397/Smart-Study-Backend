const Express=require("express")
const router=Express.Router()
const NotesController=require("../controller/Notes")


router.route("/notes/key/:key").get(NotesController.getkeySearch)
router.route("/notes/result").post(NotesController.getSearchresult)
router.route("/notes/add").post(NotesController.CreateQuestion)

module.exports=router