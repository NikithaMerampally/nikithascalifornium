const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connecting nodejs app with mongoDb
mongoose.connect("mongodb+srv://NikithaMerampally:nikitha123@nikithascluster.hwo5ucz.mongodb.net/test", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})



router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})





router.get("/wiki/:countryName", function(req, res) {
    
    // ...
    // hey nodejs , go and get me the data for countryName
    res.send( {data: "something data"} )
})






router.get("/:productName/p/:itemId", function(req, res) {
    let product = req.params.productName
    let itemId= req.params.itemId
    // ...
    // hey nodejs, go and get me the data for hte variable ( its value) product 
    res.send( {data: product} )
})


router.get("/get-query-1", function(req, res) {
    let data = req.query
    let var1= data.myCoolVar
    let var2= data.xyz

    console.log( data)

    res.send( {data: data, status: true} )
})

// take marks in req.query in a variable named "marks" and send "pass" if marks>40 else send "fail"
router.get( "/get-query-2", function (req, res){
    let marks= req.query.marks
    let result = marks >40 ? "pass" : "fail"
    //ternary operator
    res.send( {data: result , status: true})
})

//query params ( as well as path params ) can be sent in post request as well
router.post( "/post-query-1", function (req, res){
    let data= req.query
    console.log( data)
    res.send( {data: data , status: true})
})

//filter out all the numbers that are greater than "input" ( input is received from query params)
let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]

router.post( "/post-query-2", function (req, res){
    let input= req.query.input

    // let finArr= myArr.filter ( ele => ele>input )
    let finalArr= []
    for( i=0 ; i<myArr.length ; i++){
        if ( myArr[i] > input )     finalArr.push( myArr[i])
    }
    res.send( {data: finalArr , status: true})
})
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 router.post("/votingage",function(req,res){
    let agelimit=req.query.age;
    let newArray=[]
    persons.forEach((x)=>{
        if(x["age"]>agelimit){
            x["votingStatus"]=true;
            newArray.push(x);

        }
    })
    res.send(newArray)
 })
module.exports = router;