'use strict'
var http = require('http');
let url = require('url');
let path = require('path');
let fs = require('fs');

var server = http.createServer((req,res)=>{
    console.log(req.method+':'+req.url);
    var pathname = url.parse(req.url).pathname;
    var filepath = path.resolve('.')+pathname;
    console.log('+++++++',pathname,path.resolve('.'));
    fs.stat(filepath,(err,state)=>{
        if(!err&&state.isFile()){
            console.log('200',req.url);
            res.writeHead('200');
            fs.createReadStream(filepath).pipe(res);
        }
        else{
           // console.log('err',err);
            res.writeHead('404')
            res.end('404 not find')
        }
    })
})
server.listen(8000)
console.log('server is listening to port 8000');