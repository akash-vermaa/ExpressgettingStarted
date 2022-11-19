const http = require('http');
const {createReadStream} = require('fs');

const server = http.createServer((req, res)=>{
    const fileStream = createReadStream('../contents/bigFile.txt', 'utf8');

    fileStream.on('open', ()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error', (err)=>{
        res.end(err);
    })
})

server.listen(5000, ()=>{
    console.log("Server listen to 5000...");
})