
//These run on main thread first 
const http = require('http'); 
const fs = require('fs');

console.log("Node program starts")


//this wait in thread pool 
fs.readFile('input.txt', (error, data) => { console.log(data);
})
function someTask(){
}
//some syncronous code
someTask()
http.createServer((req, res) => {
fs.readFile('large-file.txt', (err, data) => {
res.end(data);
})
})