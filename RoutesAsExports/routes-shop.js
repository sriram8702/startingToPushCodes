const path=require('path');

const express=require('express');

const rootDir=require('../helper/path.js')
const router=express.Router();

router.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDir,'htmls','shop.html'));
});

module.exports=router;