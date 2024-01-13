const http=require('http');

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    if(req.url=='/home') res.write('<body><h1>Welcome home</h1></body>') 
    if(req.url=='/about') res.write('<body><h1>Welcome to About Us page</h1></body>') 
    if(req.url=='/node') res.write('<body><h1>Hello from my Node.js Server</h1></body>') 
    res.write('</html>')

});
server.listen(4000);