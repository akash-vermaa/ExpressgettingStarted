const {readFile} = require('fs');

console.log('started a first task');

readFile('../contents/first.txt', 'utf-8', (err, res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log('comleted first task');
})

console.log('starting next task.');