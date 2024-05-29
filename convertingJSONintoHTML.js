


const fs = require('fs');
const http = require('http');
let productListHTML= fs.readFileSync('./product-list.html',"utf-8");

const html = fs.readFileSync('./index.html', "utf8");

let product =JSON.parse(fs.readFileSync('./data.json',"utf-8")) ;
let productHTMLarray= product.map((prod)=>{
    let output = productListHTML.replace('{{%IMAGE%}}',prod.productImage);


output = output.replace('{{%NAME%}}', prod.name);
output = output.replace('{{%MODELNAME%}}', prod.modeName); 
output = output.replace('{{%MODELNO%}}', prod.modelNumber);
output = output.replace('{{%SIZE%}}', prod.size);
output = output.replace('{{%CAMERA%}}', prod.camera); 
output = output.replace('{{%PRICE%}}', prod.price); 
output = output.replace('{{%COLOR%}}', prod.color);
return output;
    
})

const server = http.createServer((request, response) => {
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
    } else if (path.toLocaleLowerCase() == '/products'){

        let productResponseHtml= html.replace('{{%CONTENT%}}',productHTMLarray.join(','));

        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(productResponseHtml);
      

    }
    
    else {
        response.writeHead(400);
        response.end(html.replace('{{%CONTENT%}}', '404 error: Page Not Found'))
    }

})

//start a server 

server.listen(8000, '127.0.0.1', () => {
    console.log("server is listening to the port 8000");
})
