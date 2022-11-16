const {createReadStream} = require('fs');

const stream = createReadStream('../contents/bigFile.txt', {
    highWaterMark: 32000
});

stream.on('data',(result)=>{
    console.log(result);
})