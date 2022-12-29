const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const assignmentcontroller=require("../controllers/assignmentcontroller")
const middleware=require("../middlewares/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", assignmentcontroller.createuser )

router.post("/login", assignmentcontroller.logindata)

//The userId is sent by front end
router.get("/users/:userId",middleware.mid1, assignmentcontroller.getuser)

router.put("/users/:userId", middleware.mid1,assignmentcontroller.updateuser)

router.delete("/delete/:userId",middleware.mid1, assignmentcontroller.DeleteUser)

module.exports = router;