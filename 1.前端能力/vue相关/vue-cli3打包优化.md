# vue-cli3打包优化

  vue-cli是vue的官方推荐的脚手架，集成了webpack的功能，里面有插件，可以方便的集成功能，例如ant-design-vue对应的是vue-cli-plugin-ant-design,可以在直接把组件库集成到你的项目中，并且在入口文件自动引入

  我的项目就是这样一个结构，vue-cli3脚手架，插件集成了ant-design-vue，是一个简单功能的页面，但是打包之后的内容却有1.7Mb，打包时间16s。这就激发了我将这个文件打包优化

  首先第一步，由于vue-cli-plugin-ant-design的引入是全量引用全量打包的，所以换成手动引入，更改babel.config.js，加入

  ```
    'plugins': [
        ['import', {
        'libraryName': 'ant-design-vue',
        'libraryDirectory': 'es',
        'style': 'css'
        }] // `style: true` 会加载 less 文件
    ]
  ```

  第二步，分别引入需要的组件

  ```
    import {
    Input,
    Radio,
    Spin,
    Button,
    message
    } from 'ant-design-vue'
    Vue.config.productionTip = false

    Vue.use(Input)
    Vue.use(Radio)
    Vue.use(Spin)
    Vue.use(Button)

    Vue.prototype.$message = message
  ```

> 通过这一步之后，打包效果如下

    打包时间由16--》10，打包体积1.7M--》1M

继续加油，经过观察，打包还全量引入了antd-icon，差不多500kb的大小，这里也可以优化

首先将vue.config.js里加入如下