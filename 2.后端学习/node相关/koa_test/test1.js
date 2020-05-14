const fs = require('fs')

fs.readFile('README.md',(err,data)=>{
    if(err) return console.log(err)
    console.log('异步读取',data.toString())
})
console.log('程序执行完毕')