const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('../loginDeneme/public/server/routers/userRouter');
// const cors = require("cors")
const axios =require('axios')

mongoose.connect('mongodb://localhost:27017/KendiniKesfetDB');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succesfull");
})
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile("public/views/index.html", {root: path.join(__dirname)} ,);
});

app.post("/login", function(req, res) {
    res.send(req.body)
    console.log(req.body)
});

app.post("/register", function(req, res) {
    res.send(req.body)
    // user.getUser();
    console.log(req.body)
});

app.post("/getApi",function(req,res){
    axios.get("https://makeup-api.herokuapp.com/api/v1/products.json")
    .then((res2)=>{
        res.send(res2.data)
    })
    .catch(console.error)
});

app.listen(3000, function(err) {
    if(err) console.log(err);
    console.log("Server Listening")
});
app.use('/user', userRouter)