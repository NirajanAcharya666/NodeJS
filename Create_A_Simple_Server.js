

const { response } = require('express');
const http = require('http');

//start a server 

const server = http.createServer((request,response)=>{
    response.end("Hello from server");
    console.log("server is created");
    // to print the request type 

    console.log(request);

})

//start a server 

server.listen(8000,'127.0.0.1',()=>{
console.log("server is listening to the port 8000");
})
