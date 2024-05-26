

const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./index.html', "utf8");
//start a server 

const server = http.createServer((request, response) => {
    let path = request.url;
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        response.end("Hello, this is home");
    } else if (path.toLocaleLowerCase() == '/about') {
        response.end("This is about")
    } else if (path.toLocaleLowerCase() == '/contact') {
        response.end("you are in the contact page");
    } else{
        response.end('404 Error occured')
    }

})

//start a server 

server.listen(8000, '127.0.0.1', () => {
    console.log("server is listening to the port 8000");
})
