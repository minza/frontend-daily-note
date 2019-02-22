//什么是事件委托就不说了，不清楚去百度吧，具体的代码网上写的不太好，我这里补充一下
var bindEvent = function(ev,Func){
    if(this.addEventListener){
        this.addEventListener(ev,Func,false)   //第三个参数ture捕获阶段，false冒泡阶段
    }
    else if(this.attachEvent){
        this.attachEvent('on'+ev,Func)
    }
}
document.getElementById('#add').bindEvent('click',function(e){
    var target = e.target || e.srcElement  //兼容IE
    while(targe.nodeName.toLowerCase()!=='html'){
        if(target.getAttribute('class')==='myTarget'){
            //dosomeThing Here;
        }
        target = target.parentNode    //一直冒泡到html
    }
})