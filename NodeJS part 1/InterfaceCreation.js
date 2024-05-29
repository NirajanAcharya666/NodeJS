


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("what is your name: ", (name) => {
    console.log('Your name is ' + name);
    rl.close();
})

rl.on('close',()=>{
    console.log('Operations is closed');
    process.exit(0);
})