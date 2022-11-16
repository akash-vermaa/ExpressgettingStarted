const http = require('http');
const {readFileSync, createReadStream} = require('fs');
http
    .createServer((req, res)=>{
        const text = readFileSync('../contents/bigFile.txt');
        const fileStream = createReadStream('../contents/bigFile.txt', 'utf8');
        fileStream.on('open', ()=>{
            fileStream.pipe(res);
        })
        fileStream.on('error', (err)=>{
            res.end(err);
        })
    })
    .listen(5000);