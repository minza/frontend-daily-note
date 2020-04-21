const Koa = require('koa')
const app = new Koa()

app.use(ctx=>{
    let _html = '404-NotFound'
    switch(ctx.url){
        case '/':
            _html = 'index'
            break;
        case '/about':
            _html = 'about'
            break;
        default:
            _html = 'some thing'
            break;
    }
    ctx.body = _html
})

app.listen(3000)