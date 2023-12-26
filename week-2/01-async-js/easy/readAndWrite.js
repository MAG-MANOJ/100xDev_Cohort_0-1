const fs = require("fs");

let addData = "This is the new content of the file.";

fs.writeFileSync("./data.txt",addData,{flag:'a+'})

const data = fs.readFileSync("./data.txt","utf-8")



console.log(data);
