## 什么是xss攻击
xss（cross-site scripting）,跨站脚本攻击，指的是目标网站被注入不属于本站的脚本，获取用户信息（cookie，session，storage等），对用户进行钓鱼诈骗等攻击
## xss的种类
xss主要有以下几种方式
- 通过url注入恶意代码
- 通过dom注入代码
- 恶意代码注入到目标服务器上

> url注入代码

这种是最常见xss攻击方式，通过在url上注入恶意代码,目标服务器提取到恶意代码后直接返回给客户端，客户端直接解析恶意代码，恶意代码窃取用户信息，冒充用户行为等

> dom注入

攻击者构造了包含恶意代码的数据结构，
浏览器解析执行，
发生攻击。。。

> 恶意代码注入到服务器上

攻击者提交包含恶意代码的数据到目标服务器上，
服务器存储恶意代码数据,其他用户访问相关数据，
服务器返回包含恶意代码的数据
浏览器解析恶意代码
发生攻击

*以上集中方式的原理都是恶意代码的解析，因为浏览器是一个相对宽松的环境，不管哪里来的脚本，只要插入页面，都会执行和解析*

## 避免方式
- 前端过滤，凡是有数据提交的地方，都需要过滤一下，url跳转时页需要编码一下
- 后端过滤,前端过来的数据需要过滤下下再进行落库等操作
- header加上httponly,不让前端读cookie
- 前端规范，少用innerHtml,outerHtml,appendChild,document.write,可以换为innerText,textContent,setAttribute