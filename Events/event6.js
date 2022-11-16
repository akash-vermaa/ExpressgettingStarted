const {readFile, writeFile} = require('fs').promises;
const start = async() =>{
    try{
        const first = await readFile('../contents/first.txt', 'utf-8');
        const second = await readFile('../contents/second.txt', 'utf-8');
        await writeFile('../output/result.txt', `This is awesome: ${first} ${second}\n`,{flag:'a'});
        console.log(first, second);
    }
    catch(error){
        console.log(error);
    }
}
start();