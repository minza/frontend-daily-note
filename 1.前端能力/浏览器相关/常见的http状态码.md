1XX 表示消息
2XX 成功
3XX 重定向
4XX 客户端错误
5XX 服务端错误

> 常见的如下：

200 相应成功
301 永久重定向，慎用，浏览器会缓存
302 临时重定向,会把method的post改成get
307 临时重定向，不会改变method
400 客户端错误
401 客户端未登陆
403 请求被拒绝
404 文件不存在
500 服务器未知错误
502 网关错误
503 服务暂时无法使用
