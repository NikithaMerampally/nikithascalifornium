const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const books=require("../models/books")
const Pusercontroller=require("../controllers/Pusercontroller");
const bookController=require("../controllers/bookscontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser )

router.get("/getUsersData", UserController.getUsersData)

router.post("/Pcreateuser2",Pusercontroller.userCreate)

router.get("/getPuserdata",Pusercontroller.userget)

router.post("/createBooks",bookController.createbooks)

router.get("/getBooks",bookController.getbooks)

module.exports = router;