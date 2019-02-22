var dom = document.getElementById('id').getClientRects().length
//这个方法返回clientRect的集合，每个对象包含上下左右(宽和高，这两个有兼容性)等属性
/*对于块级元素，只有一个边框，对于行内元素有几行就有几个边框，所以可以用来判断行高*/
/*注意必须display:inline;其他任意值都不行，而且还不能有float,visible等影响显示的属性
