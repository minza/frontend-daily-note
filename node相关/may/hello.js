var koa = require('koa');
const app = new koa();

app.use(async ctx => {ctx.body = 'hello,fuck yoummm'})


console.log('app is listening at port 3000');
app.listen(3000);