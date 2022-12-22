const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose = require('mongoose');
const moment=require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connecting nodejs app with mongoDb
mongoose.connect("mongodb+srv://NikithaMerampally:nikitha123@nikithascluster.hwo5ucz.mongodb.net/nikithascluster", {useNewUrlParser: true})
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))
    app.use(function(req,res,next){
        let ip=req.socket.remoteAddress;
        console.log("my ip"+ip);
        let mypath=req.path;
    

        console.log("my path is "+mypath)
        let time= new Date().getTime();
        let date=new Date(time)
        console.log(date.toString())

        
        
        next()
    } )   

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});