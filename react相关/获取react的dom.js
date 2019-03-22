//1通过原生
document.getElementById('id')
2//通过ref
this.refs.refname
//现在react不推荐使用的方法，以后可能会考虑废除
//推荐使用下面这种
<div ref = {_ref=>{this._ref = _ref}}></div>
//这个ref如果放在组件上，返回的是组件实例，放在原生dom上就是dom实例
3//react的方法
import {ReactDOM} from 'react-dom'
ReactDOM.findDOMNode(somedom)   //somedom有两种情况，1dom直接返回dom,2组件名的话返回render方法的dom


getList()
var p = new Promise((resolve,reject)=>{
    getList().then((res)=>{resolve(res)})
}).then(res=>{
    
})
function getPromiseList(data){
    let data = res.dataList;
    const arr = data.map(item=>{
        return new Promise((resolve,reject)=>{
            var data = getDatail()
            resolve(data)
        })
    })
    return arr;
}