

const fs = require('fs');

let textIn= fs.readFileSync('./text/input.txt',"utf-8");

console.log(textIn);

let content = `This the writing synchronous file. ${textIn}. Date created ${new Date()}`;
fs.writeFileSync('./text/output.txt',content);
console.log('File written successfully');