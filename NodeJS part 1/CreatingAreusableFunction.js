


const fs = require('fs');
const http = require('http');
let productListHTML = fs.readFileSync('./product-list.html', "utf-8");
let url = require('url');

const html = fs.readFileSync('./index.html', "utf8");
let productDetailtHtml = fs.readFileSync('./product-details.html', "utf-8");

let product = JSON.parse(fs.readFileSync('./data.json', "utf-8"));

function replaceHtml(template, product) {
    let output = template.replace('{{%IMAGE%}}', prod.productImage);


    output = output.replace('{{%NAME%}}', product.name);
    output = output.replace('{{%MODELNAME%}}', product.modeName);
    output = output.replace('{{%MODELNO%}}', product.modelNumber);
    output = output.replace('{{%SIZE%}}', product.size);
    output = output.replace('{{%CAMERA%}}', product.camera);
    output = output.replace('{{%PRICE%}}', product.price);
    output = output.replace('{{%COLOR%}}', prproductod.color);
    output = output.replace('{{%ID%}}', product.id);
    output = output.replace('{{%ROM%}}', product.ROM);
    output = output.replace('{{%ID%}}', product.id);
    return output;
}

const server = http.createServer((request, response) => {

    let { query, pathname: path } = url.parse(request.url, true)
    // console.log(x);
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        //set header and staus as well custom header 

        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello,header'
        })
        response.end(html.replace('{{%CONTENT%}}', productListHTML));
    } else if (path.toLocaleLowerCase() == '/about') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello,header'
        })
        response.end(html.replace('{{%CONTENT%}}', ' You are in about page'))
    } else if (path.toLocaleLowerCase() == '/contact') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'hello,header'
        })
        response.end(html.replace('{{%CONTENT%}}', ' You are in contact page'));
    } else if (path.toLocaleLowerCase() == '/products') {
        //it will return us a new array so lets us save it in new variable
        let productHTMLarray = product.map((prod) => {
            return replaceHtml(productListHTML, prod);

        })

        if (!query.id) {

            let productResponseHtml = html.replace('{{%CONTENT%}}', productHTMLarray.join(','));

            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(productResponseHtml);

        }
        else {

            let prod = product(query.id)
            let productDetailsResponse= replaceHtml(productDetailtHtml,prod )
            response.end(html.replace('{{%CONTENT%}}', productHTMLarray));
        }


    }

    else {
        response.writeHead(400);
        response.end(html.replace('{{%CONTENT%}}', '404 error: Page Not Found'))
    }

})

//start a server 

server.listen(8080, '127.0.0.1', () => {
    console.log("server is listening to the port 8000");
})


