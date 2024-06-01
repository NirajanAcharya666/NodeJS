const fs = require('fs');
const http = require('http');
let productListHTML = fs.readFileSync('./product-list.html', "utf-8");
let url = require('url');

const replaceHtml = require('./module/replaceHtml')

const html = fs.readFileSync('./index.html', "utf8");
let productDetailtHtml = fs.readFileSync('./product-details.html', "utf-8");

let product = JSON.parse(fs.readFileSync('./data.json', "utf-8"));

let server = http.createServer()
// in this server object we can pass the event handler
server.on('request', (request, response) => {
    let { query, pathname: path } = url.parse(request.url, true);

    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello,header'
        });
        response.end(html.replace('{{%CONTENT%}}', productListHTML));
    } else if (path.toLocaleLowerCase() == '/about') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello,header'
        });
        response.end(html.replace('{{%CONTENT%}}', ' You are in about page'));
    } else if (path.toLocaleLowerCase() == '/contact') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello,header'
        });
        response.end(html.replace('{{%CONTENT%}}', ' You are in contact page'));
    } else if (path.toLocaleLowerCase() == '/products') {
        let productHTMLarray = product.map((prod) => {
            return replaceHtml(productListHTML, prod);
        });

        if (!query.id) {
            let productResponseHtml = html.replace('{{%CONTENT%}}', productHTMLarray.join(','));
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(productResponseHtml);
        } else {
            let prod = product.find(p => p.id == query.id);
            let productDetailsResponse = replaceHtml(productDetailtHtml, prod);
            response.end(html.replace('{{%CONTENT%}}', productDetailsResponse));
        }
    } else {
        response.writeHead(400);
        response.end(html.replace('{{%CONTENT%}}', '404 error: Page Not Found'));
    }

});


server.listen(8080, '127.0.0.1', () => {
    console.log("server is listening to the port 8000");
});