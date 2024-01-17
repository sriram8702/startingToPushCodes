const http=require('http');

const bodyParser=require("body-parser");
const express=require('express');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/add-product",(req,res,next)=>{
   res.send("<form action='/product' method='POST'><input type='text' name='title' placeholder='Name of the product'><input type='text' name='size' placeholder='Size of the product'><button type='submit'>Add Product</button></form>" );
    
});

app.post("/product",(req,res,next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect("/");
});

app.use("/",(req,res,next)=>{
    res.send("<h1>Hello from Epress.js</h1>");
});

app.listen(4000);