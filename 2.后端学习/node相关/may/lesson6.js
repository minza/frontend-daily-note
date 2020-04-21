const Koa = require('koa')
const app = new Koa()

app.use((ctx)=>{
    let url = ctx.url, 
        query = ctx.query,
        queryString = ctx.querystring

    ctx.body = {
        url,
        query,
        queryString
    }
})

app.listen(3000)