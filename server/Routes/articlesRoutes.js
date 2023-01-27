const express=require("express")
const router=express.Router()
const {getArticles,postArticles,deleteArticles}=require("../dbFiles/dbOperation")
const {postValidation}=require("../validation")

router.get("/data",getArticles)
router.post("/postData",postValidation,postArticles)
router.put("/deleteData/:id",deleteArticles)

module.exports=router