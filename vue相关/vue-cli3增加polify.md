# polyfill是啥我就不说了，主要时候针对蛋疼ie的

> 首先安装
`npm install @babel/polyfill -s`

> 配置

```
module.exports = {
    presets:[
        [
            '@vue/app',{
                polyfill:[
                    'es6.array.iterator',   //需要写什么
                    'es7.promise.finally'
                ]
            }
        ]
    ]
}
```

