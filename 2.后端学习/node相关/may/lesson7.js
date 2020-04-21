const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: "qq",
  port: 465,
  secureConnection: true,
  auth: {
    user: "867148808@qq.com",
    pass: "kczahilhaizebgag",
  },
});

let mailOptions = {
    from:'"nodemailer 测试" <867148808@qq.com>',
    to:'zhangzml@qq.com',
    subject:'Hello nodejs',
    html:'<b>hello minza</b>'
}

transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        return console.log('err',err)
    }
    console.log(`message send ${info}`)

})