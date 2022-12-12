const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { result } = require('underscore');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})


router.get("/movie", function(req, res){
    let movies=["bahubali","3 idiots","bajirao mastani"]
    res.send(movies)//first  ans
    
})
router.get("/movie/:indexNumber", function(req, res){
    let movies=["bahubali","3 idiots","bajirao mastani"]
    let length=movies.length
    //req.query.size
    //req.query.brand
let index=req.params.indexNumber
if (index>=length){
    res.send("please use a valid index")//thirds ans
}else{
    res.send(movies[index])//second ans

}   
})

router.get("/films",function(req,res){
    let filmsarray=[{
        "id":1,
        "name":"baarish"
    },{
        "id":2,
        "name":"YJHD"
    },{
        "id":3,
        "name":"3 idiots"
    },{
        "id":4,
        "name":"The rising stars"
    }]
 res.send(filmsarray)//fourth ans 
})
router.get("/films/:filmsId",function(req,res){
    let filmsarray=[{
        "id":1,
        "name":"baarish"
    },{
        "id":2,
        "name":"YJHD"
    },{
        "id":3,
        "name":"3 idiots"
    },{
        "id":4,
        "name":"The rising stars"
    }]
 let filmsID=req.params.filmsId
 let arraylength=filmsarray.length
 if(filmsID>=arraylength){
    res.send(filmsarray[filmsID])
 }else{
   
    res.send(filmsarray[filmsID])//fifth ans cc
 }
})

//todays assignment
router.get("/sol1",function(req,res){
    let array=[1,2,3,5,6,7];
    let length=array.length;
    let n=array[length-1];
    
    let consSum=n*(n+1)/2;
    let summ=0
    array.forEach((i)=>{
        summ=summ+i

    })
    let obj={datatype:consSum-summ}
    res.send(obj);

})
//solution2 
router.get("/sol2", function (req, res) {
    
    let ar= [33, 34, 35, 37, 38]
    let sum2=0
    ar.forEach((x)=>sum2+=x)
    let result2=((ar.length+1)*(ar[0]+ar[ar.length-1])/2)
    let obj2={'datamissing' : result2-sum2}
    res.send(obj2)


})

module.exports = router;