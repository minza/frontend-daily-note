const Koa = require('koa')
const app = new Koa()

const path = require('path')
const static = require('koa-static')
const staticPath = './'

app.use(static(
    path.join(__dirname,staticPath)
))
app.use(async (ctx)=>{
    ctx.body = 'hell0 big brother'
})

app.listen(3000)

