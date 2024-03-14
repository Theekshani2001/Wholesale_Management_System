/*
* express framework-> (npm i express)
* mongoose(plug in mongo db)-> (npm i mongoose)
* dotenv(a file for store final variables)->(npm i dotenv)
* nodemon-> refresh the page->(npm i nodemon -g)
* */

const express=require("express");
const mongoose=require("mongoose");
require('dotenv').config();


const CustomerRoute=require('./route/CustomerRoute');

const app=express();
app.use(express.json({limit:'50mb'}));


const serverPort=process.env.SERVER_PORT;

mongoose.connect(
    "mongodb://localhost:27017/pos",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true


    }
).then(()=>{
    app.listen(serverPort,()=>{
        console.log(`API Service is Up and Running on ${serverPort}`)
    })

}).catch(error=>{
    console.log(error);
});

app.use('/api/v1/customerRoute',CustomerRoute);