# node的模块基础原理

nodejs模块机制使用CommonJS规范

```
每个js文件自成一个模块，他们的命名和作用域相互独立
```

> 使用方法

```
//暴露变量
module.exports = variable;   

//使用变量
var foo = require('./somepath.js');
```

##原理

```
nodejs拿到somepath后会先包装一下
(function(){
    //somepath的代码
})()
```
> 为什么要这样呢

*这是为了解决作用域的问题,比入a文件有个全局变量v,b文件有个全局变量v，两个文件被导入之后都对全局变量v操作，那就混乱了，莫名bug，还不好发现*

> module 实现

```
这里会准备一个module对象
const module = {
    key:'someKey'
    export:{}
}
let exported = load(module);
function load(module){
    //读取somePath的代码。如：
    function test(){
        //some code
    }

    module.export.test = test

    rurn module;

}
save(module,exported)
```

> 文字介绍

上面这一段先定义了module变量，在用load函数处理导入的文件，并赋值给module的export变量。处理之后保存

完