const fs = require('fs');
const path = require('path');
const url = require('url');
const http = require('http');
const colors = require('colors');
const dotenv = require('dotenv').config();

const port = process.env.SERVER_PORT || 5000;

http.createServer((req, res)=>{
    
    // routing
    if(req.url === '/'){
        
        const homePage = fs.writeFileSync(path.join(__dirname),'/public/index.html');
        
        res.writeHead(200, { "Content-Type" : "text/html" });
        res.write(homePage);
        res.end();
    }
    // const link = path.join(__dirname, '/public/index.html');
    // res.end(link);
}).listen(port, ()=>{
    console.log(`Server is running on ${port} port.`.bgGreen.red);
})