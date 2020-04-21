const http = require('http')
const host = '127.0.0.1'
const port  = '8088'

const serve = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World\n')
})

serve.listen(port,host,()=>{
    console.log('http is listen at port',port)
})