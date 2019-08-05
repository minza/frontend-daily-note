# throttle(节流)的简单实现

> 作用

主要是用来控制重复计算（例如滚动）的计算频次，保证效率的同时提高性能

> 原理

原理主要是利用闭包保存上一次执行的时间，和本次执行的时间戳做比较，超过要求的间隔时间即可计算

> 代码

```
function throttle(fn,wait = 50){   //将对传入的函数作节流控制
  let previce = 0
  return function(...arg){
    let after = +new Date();
    if(after - previce>wait){
     previce = after
     fn.apply(this,args)
    }
  }
}
//1000毫秒左右执行一次，为什么是左右？因为js单线程，如果前一个之前的动作花费了5000毫秒，那总体就是6000毫秒左右
const betterFn = throttle(()=>{console.log('doing'),1000})   
setInterval(betterFn,10)  //10秒尝试触发一次
```

> 方法二：通过定时器实现

```
function throttle(fn,wait = 50){   //将对传入的函数作节流控制

  let previce 

  return (...args)=>{
      if(previce){
          return
      }
      previce = setTimeout(()=>{
          previce = null
          fn.apply(this,args)
      },wait)
  }
  
}
const betterFn = throttle(()=>{console.log('doing'),1000})   
setInterval(betterFn,10)  //10秒尝试触发一次
```