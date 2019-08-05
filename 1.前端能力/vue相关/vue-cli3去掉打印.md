# 去掉打印，这里使用的是transform-from-console插件

> 安装

`npm install babel-plugin-transform-remove-console -s`

> 配置
```
const plugin = [];
if(process.env.NODE_ENV === 'production') plugin.push('transform-remove-console)
module.exports = [
    presets:[],
    plugin
]
```
