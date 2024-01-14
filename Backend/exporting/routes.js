
const fs=require('fs');

const reqHandler= (req,res)=>{
const url=req.url;
const method=req.method;
    if(url=="/"){
        fs.readFile('message.txt', (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            res.write("<html><body><p>" + data + "</p><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body></html>");
            return res.end();
          });
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsed=Buffer.concat(body).toString();
            const mes=parsed.split('=')[1];
            fs.writeFile('message.txt',mes,err=>{
            res.statusCode=302;
            res.setHeader("Location","/");


            return res.end()
            });
        })
        
        
    }
    res.setHeader('Content-Type','text/html');

    

};
module.exports=reqHandler;