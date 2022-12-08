const express = require('express');
const router = express.Router();
const intro=require('./intro')
const module2=require(`./functionmodule`)

router.get('/test-me', function (req, res) {
    res.send('any dummy text')
    console.log(`my email is`,intro.myEmail)
    console.log(`my function is`,module2.myFunction('nikitha'))
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;