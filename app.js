const path=require('path');

const express=require('express');
const bodyParser=require("body-parser");

const app= express();

const adminRoute=require("./RoutesAsExports/routes-admin.js")
const shopRoute=require("./RoutesAsExports/routes-shop.js")


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin', adminRoute);
app.use(shopRoute);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'htmls','404.html'));
})
app.listen(4000);