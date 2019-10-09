# 原生js实现bind


    面试经常问到，深入理解的话对日常工作也有帮助

> simple version

```
    Function.prototype.bind = function(context){
        var self = this;
        return function(){
            return self.apply(context,arguments)
        }
    }
```

> complex version with pre input（可以预设参数或者多次传入参数）

```
    Function.prototype.bind = function(){
        let self = this;
        let context = [].shift.call(arguments);
        let args = [].slice.call(arguments);
        return function(){
            return self.apply(context,[].prototype.concat(args,[].prototype.slice(arguments)))
        }
    }

    var func = function(a,b,c,d){
        console.log(this.name)
        console.log([a,b,c,d])
    }
    var obj = {name:'some body'}
    var func1 = func.bind(obj,1,2)
    func1(3,4)  //[1,2,3,4]
```

