const fs = require('fs')
const path = require('path')

function travel(dir,callback){
    fs.readdirSync(dir).forEach((file)=>{
        var pathname = path.join(dir,file)
        console.log('pathname',pathname)
        if(fs.statSync(pathname).isDirectory()){
            
            travel(pathname)
        }
        else{
            callback && callback(pathname)
        }
    })
}

function cb (name){
    console.log(name)
}
travel('/Users/zhangminglong/code/4m/daydayup/2.后端学习/node相关',cb)