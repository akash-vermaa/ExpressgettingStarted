const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', ()=>{
    console.log('Data received')
})
console.log("Data receiving...")
setTimeout(()=>{
    
    customEmitter.emit('response');
}, 8000);
