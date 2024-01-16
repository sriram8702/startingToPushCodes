const http=require('http');

const express=require('express');

const app= express();

app.use((req,res,next)=>{
    console.log("In the first middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("In the Second middleware");
    res.send("<h1>Starting my Express Journey</h1>");
});

app.listen(4000);