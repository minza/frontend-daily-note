# 抽取外部依赖

> 作用

这个是性能优化挺重要的一个地方，由于项目中一般都会引用很多插件，例如element，vuex，axios等，会导致我们的bundle比较大
所以我们可以单独吧这些插件抽取出来

> 配置方法

## 1.引用插件到public

```
public
    element
    vue-router
    vuex
```

## 2.配置

```
module.exports = {
    configWebpack = config => {
        config.extenals = {
            'vue':'vue',
            'element-ui':'ELEMENT',
            'vuex':'Vuex'
        }
    }
}
```

## 3.在index.html里面加入对应的js和css引用