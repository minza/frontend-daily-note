# 别名

这是个很有用的属性，比如../../../../asserts/example.jpg，可以直接写成asserts/example.jpg，可以直接写成asserts

> 配置方法

```
const path = require('path');
const resolve = dir = path.join(__dirname,dir);  //拼接相对地址变成绝对地址

module.exports = {
    chainWebpack :config => {
        config.resolve.alias
            .set('@',resolve('src'))
            .set('asserts',resolve('src/asserts))
    }
}
```