const http =require('http');
const port = 3000;
const host = '127.0.0.1';
const {readFile,open,writeFile}= require('fs');

 const myServer = http.createServer((req,res)=>{
    const handleFileSystem =(statusCode,dataFile,req,res)=>{
        readFile(dataFile,'utf-8',(err,data)=>{
            if (err) {
                console.log(err);
            } else {
                res.writeHead(statusCode,{'content-type':'text/html'});
                res.write(data);
                res.end();
            }
            
        })
    }
    if (req.url ==='/') {
        handleFileSystem(200,'index.html')
    } else if(req.url ==='/about') {
        handleFileSystem(200,'about.html')
    } else if(req.url ==='/contact') {
        handleFileSystem(200,'contact.html')
    } else {
        handleFileSystem(404,'error.html')
    }
})

myServer.listen(port,host,()=>{
    return `My server is running this adress > http://${host}:${port}`;
})