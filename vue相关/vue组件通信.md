## 组件通信的方式

>> 事件bus

new 一个vue实例Event，传入各个组件，组件中通过Event.on， Event.emit来事件通信

>> 2.4新增属性 $attrs, $listeners

$attrs可以接受父组件传入的非props的属性,$listeners 可以接收副作用语种的v-on事件监听器

>> 2.2.0新增的provide,  inject

给vue实例添加provide属性，子组件添加inject属性数组，包含该属性，那么子组件就可以访问改属性

>> $parent, $children, $ref

直接获取节点的全量属性，没啥说的

>> props, emit

    最常用的

>> vuex
 
    状态管理，也用的比较多
