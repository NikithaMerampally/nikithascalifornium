const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first third api!')
});
router.get('/test-you',function(req,res){
    res.send("hiii hello i have changed to test-you")

})

module.exports = router;