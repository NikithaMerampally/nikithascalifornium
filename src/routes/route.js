const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

const assignmentcontroller=require("../controllers/assignmentcontroller")
const middleware=require("../middlewares/assignmentmiddleware")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createBook", commonMW.abc, BookController.createBook  )
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

//assignment

router.post("/createusersss",middleware.validateor,assignmentcontroller.createUser)
router.get("/getusersdata",assignmentcontroller.getuser)
router.post("/createproduct",assignmentcontroller.createproduct);
router.get("/getproduct",assignmentcontroller.getproduct);

router.post("/createorder",middleware.validateor,assignmentcontroller.createorder)


module.exports = router;