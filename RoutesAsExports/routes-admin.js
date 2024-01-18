const path=require('path');

const express=require('express');

const rootDir=require('../helper/path.js')

const router=express.Router();

router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'htmls','add-product.html') );
     
 });
 
router.post("/product",(req,res,next)=>{
     console.log(req.body.title);
     res.redirect("/");
 });

router.get("/contactus",(req,res)=>{
    res.sendFile(path.join(rootDir,'htmls','contactus.html') );
})

router.post("/sucess",(req,res,next)=>{
    res.send("<h3 style='text-align:center;'>Form successfuly filled</h3>")

    
})
 
module.exports=router;