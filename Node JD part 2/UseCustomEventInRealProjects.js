const events = require('events');
const user = require('./module/user')

let myEmitter= new user();




myEmitter.on('userCreated',(id, name)=>{
    console.log(`one user with ${id} and ${name} is created`);
})

myEmitter.on('userCreated',(id,name)=>{
    console.log(`one user with ${id} and ${name} is added`);
})

myEmitter.emit('userCreated',200,'John')