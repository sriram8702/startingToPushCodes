const fs=require('fs');

const express=require('express');

const bodyParser=require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/login',(req,res,next)=>{
    res.send(`<html><body><form action='/login' method='POST' 
    onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type='text'id='username' name='title' placeholder='Enter Username'><button type='submit'>Login</button></form></body></html>`);
})

app.post('/login',(req,res,next)=>{
    
        res.redirect('/');

})

app.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
       res.send(`<html><body><p>${data}</p><form onsubmit="document.getElementById('uname').value=localStorage.getItem('username')"
        action='/'method='POST'><input type='text' name='message' placeholder='Message' >
        <input type='hidden' id='uname'name='username'>
        <button type='submit'>Send</button></form></body></html>`)
    })
})



app.post('/',(req,res,next)=>{
     fs.appendFile('message.txt',`${req.body.username}:${req.body.message} `,(err)=>{
        if(err) console.log(err);
     })
        res.redirect('/');
    });
    
    

app.listen(4000);