## 什么是CSFR

   csfr（cross-site request Forgery ）,跨站请求攻击，这是一种伪造目标网站请求的web攻击方式。

## CSFR原理
    1.受害者登录http://example.com
    2.受害者访问http://fish.com，里面有一个很大的图片，外面包了个a标签————http://example.com/pay/1000?userid=adsfhhah678q34
    3.受害者点击图片，浏览器跳转http://example.com/pay/1000?userid=adsfhhah678q34，这个时候就会给example.com网站发送请求，由于受害者刚登录过，所以这个请求是携带cookie等登录态的
    4.目标服务器接收到请求，登录态校验通过，行为生效。。。
    
## 注意点

- 主要针对get请求
- 大多数的时候，用户未登录example.com，攻击不会生效

## 解决办法，主要是加强验证

- 判断refre
- 增加自由头判断登录信息
- 请求携带token


