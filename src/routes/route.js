const express = require('express');
const router = express.Router();
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')
const chunker=require('lodash');
const { fromPairs } = require('lodash');
// const intro = require('./introduction')
//const employee = require('./employee')
// const _ = require('underscore')

router.get('/test-me', function (req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)
    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
    logger.myfunction('nikitha')
    const today=new Date()
    const day=today.getDate()
    const month=today.getMonth()
    
    console.log(`todays date is ${day}`)
    console.log(`todays month is ${month}`)
    helper.myFunction();
    formatter.myFunction1();
    formatter.myFunction2();
    formatter.myFunction3();
    let months=["january","feb","march","april","may","june","july","august","september","october","november","december"]
    console.log("my chunk is "+chunker.chunk(months, 4));
    let tailarray=[1,2,3,4,6]//returns all the elements except first element that is tail of the array;
    console.log("my tail is "+chunker.tail(tailarray));
    let array1=[1,2,3]
    let array2=[1,3,5,6]
    let array3=[1,3,7,8];
    let array4=[1,3,9,0];
    let array5=[1,3,4,8];
    let resultarray=chunker.union(array1,array2,array3,array4,array5)
    console.log(`my union is ${resultarray}`)
    let pairarray=[['x',1],['y',2],['z',3],['c',4]]
    console.log(chunker.fromPairs(pairarray));

    res.send('any dummy text')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("very important text")
})

router.get("/movies",function(req,res){
    let movies=["3 idiots","bahubali","YJHD","baarish",]
    

    res.send(movies)
})
router.get("/profile/:name/:ordernUmber",function(req,res){
    console.log(`user name is ${req.params.name}`)
    
    
    if(req.params.ordernUmber>10){
        res.send("you have entered wrong orderNumber")
        
    }
    })
    
    

module.exports = router;