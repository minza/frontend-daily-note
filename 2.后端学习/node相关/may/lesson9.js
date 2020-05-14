const {Wechaty} = require('wechaty')

Wechaty.instance()
    .on('scan',(url,code)=>{console.log(`scan QRcode to login: ${code} \n ${url}`)})
    .on('login',(user)=>{console.log(`${user} is login`)})
    .on('message', message=>console.log(`message:${message}`))
    .start()