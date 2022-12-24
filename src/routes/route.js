const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const assignmentcontroller=require('../controllers/assignmentcontroler')
const middlewarefile=require("../middleware/middleware1");
const mycontroller=require("../controllers/mycontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//assignment

router.post("/createauthor",assignmentcontroller.createAuthor);
router.get("/getauthor",assignmentcontroller.getauthor);

router.post("/createpublisher",assignmentcontroller.createpublisher);
router.get("/getpublisher",assignmentcontroller.getpublisher);

router.post("/createbooks",assignmentcontroller.createbook);
router.get("/getbooks",assignmentcontroller.getbook);

router.get("/getalldetail",assignmentcontroller.bookswithalldetails);
router.get("/bookswithtrue",assignmentcontroller.bookswithtrue);

router.put('/books',assignmentcontroller.bookswithtrue)

//router.get("/reference",middlewarefile.midd,mycontroller.myhandler )this is middleware1 assignment



module.exports = router;