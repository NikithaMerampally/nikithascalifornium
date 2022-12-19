const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const Bookscontroller=require("../controllers/bookscontroller");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/postbookCollection",Bookscontroller.createbooks);

router.get("/getbookcollection", Bookscontroller.getbooks);
router.get("/bookList", Bookscontroller.getbooks);//bookname and author name
router.get("/getBooksInYear",Bookscontroller.getbooks);//get books in year
router.get("/getParticularBooks",Bookscontroller.getbooks)//condition from body


router.get("/getXINRBooks",Bookscontroller.getbooks)//get books of inr100,inr200,inr500

router.get("/getRandomBooks",Bookscontroller.getbooks)//get all books that are avialbe in stock and has pags more than 500


module.exports = router;