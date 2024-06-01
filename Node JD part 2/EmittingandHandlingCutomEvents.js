const events = require('events');

let myEmitter= new events.EventEmitter();




myEmitter.on('userCreated',(id, name)=>{
    console.log(`one user with ${id} and ${name} is created`);
})

myEmitter.on('userCreated',(id,name)=>{
    console.log(`one user with ${id} and ${name} is added`);
})

myEmitter.emit('userCreated',200,'John')