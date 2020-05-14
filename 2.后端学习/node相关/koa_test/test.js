const Koa = require('koa')
const app = new Koa()

app.use(async ctx=>{
    ctx.body = '你好，张寻欢'
})
const port = process.env.PORT
console.log('port', port)
app.listen(port)