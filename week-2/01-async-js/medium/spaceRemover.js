const fs = require('fs');

let data = fs.readFileSync("./data.txt","utf-8");

console.log(data);
data = data.replace(/\s{2,}/g, ' ').trim()
console.log(data);
fs.writeFileSync("./data.txt",data)