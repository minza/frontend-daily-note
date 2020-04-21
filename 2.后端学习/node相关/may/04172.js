const http = require('http')
const fs = require('fs')
const host = '127.0.0.1'
const port = '8088'
const serve = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','plain/text')
    
    if(req.url !== '/favicon.ico'){
        let out = fs.WriteStream('record.txt')
        out.write('===========表演开始=============')
        out.write(`请求地址${req.url} \n`)
        out.write(`请求方法:${req.method} \n`)
        out.write(`请求头信息${JSON.stringify(req.headers,null,4)} \n`)
        out.write(`请求版本${req.httpVersion}`)
    } 
    res.end('Hello MotherFucker!')
})

serve.listen(port,host,()=>{
    console.log('已经启动了服务')
})