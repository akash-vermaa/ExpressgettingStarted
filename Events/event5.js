const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home Page');
    }
    else if(req.url === '/about'){
        for(let i=0;i<50;i++){
            for(let j=0;j<50;j++){
                res.end(`${i} ${j}`);
            }
        }
        res.end('About Page');
    }

    else res.end("Error Page");
})

const SERVER_PORT = 5000;
server.listen(SERVER_PORT, ()=>{
    console.log(`server is listening on port: ${SERVER_PORT}...`);
})