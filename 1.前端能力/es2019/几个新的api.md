# 新的api

> Object.entries(someObj)

这个api用来将对象数组化
```
var a = {carMoney:1234,phoneMoney:4567}
Object.entries(a) //[[carMoney, 1234],[phoneMoney,4567]]
```

> Object.fromEntyies()

Object.entries()的反操作

> Array.prototype.flat()

这个可以用来将数组平铺,传入的参数表示降维的程度
这里有两个小技巧,
1.可以个数组去除空元素
2.不知道需要降维多少的时候可以传入infinity，直接打成一维