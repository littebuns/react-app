const fs = require("fs");

fs.readFile("./src/base/promise/test.txt", (err, data) => {
    //直接抛出异常
    if(err) throw err;
    console.log(data.toString());
});

//使用 promise 封装
const p = new Promise((resolve, reject)=>{
    fs.readFile("./src/base/promise/test.txt", (err, data) => {
        if(err) reject(err);
        resolve(data)
    });
})
p.then((data)=>{
    console.log(data);
}, (reason)=>{
    console.log(reason);
})
console.log(1);
