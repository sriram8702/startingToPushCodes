const path = require('path');

const rootDir=require('../path.js')

exports.contactform=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html') );
  }

exports.sucess=(req,res,next)=>{
    res.send("<h3 style='text-align:center;'>Form successfuly filled</h3>")
  }