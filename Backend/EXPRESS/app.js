const express=require('express');
const bodyParser=require("body-parser");

const app= express();

const adminRoute=require("./RoutesAsExports/routes-admin.js")
const shopRoute=require("./RoutesAsExports/routes-shop.js")

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
})
app.listen(4000);