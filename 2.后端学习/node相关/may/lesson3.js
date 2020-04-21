const http = require('http')

const port = 8888
const host = '127.0.0.1'
const serve = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','plain/text')
    res.end('hello mothFucker')
})
serve.listen(port,host,()=>{
    console.log(`http is listen at ${host}:${port}`)
})