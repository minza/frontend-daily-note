var koa = require('koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var rp = require('request-promise');
var logger = require('koa-logger');
var cheerio = require('cheerio');
var iconv = require('iconv-lite')
var async = require('async');
var superagent = require('superagent');


//var session = require('koa-session');
//var views = require('koa-views')    //处理模版的中间件，支持ejs。nunjucks
//var statics = require('koa-static')  //处理静态文件的插件
var app = new koa();
var router = new Router();


// app.keys = ['some secret hurr'];

// const CONFIG = {
//   key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
//   /** (number || 'session') maxAge in ms (default is 1 days) */
//   /** 'session' will result in a cookie that expires when session/browser is closed */
//   /** Warning: If a session cookie is stolen, this cookie will never expire */
//   maxAge: 1000,
//   autoCommit: true, /** (boolean) automatically commit headers (default true) */
//   overwrite: true, /** (boolean) can overwrite or not (default true) */
//   httpOnly: true, /** (boolean) httpOnly or not (default true) */
//   signed: true, /** (boolean) signed or not (default true) */
//   rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
//   renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
// };



//app.use(session(CONFIG,app));
app.use(bodyParser());
app.use(logger());

router.get('/query/:query',async (ctx,next)=>{
    let query = ctx.params.query;
    let title = superagent.get('https://list.tmall.com/search_product.htm?q=111&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100&from=mallfp..pc_1_searchbutton').end(
        function(err,res){
            if(err){
                return console.log(err);
            }
            let $ = cheerio.load(res.text);
            let title =  $('title').text();
            console.log('title',$('title').text());
            return title;
        }
    )
    ctx.body = 'title';
})

app.use(router.routes()).use(router.allowedMethods());
console.log('node is listening at port 3002');
app.listen(3002)