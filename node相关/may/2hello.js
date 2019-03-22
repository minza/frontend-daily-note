var request  =require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'https://list.tmall.com/search_product.htm?q=123&type=p&vmarket=&spm=875.7931836%2FB.a2227oh.d100&from=mallfp..pc_1_searchbutton';
console.log('node service is running');
request(url,function(err,res,body){
    if(err){
        console.log(err);
    }
    if(!err && res.statusCode== 200){
        var $ = cheerio.load(body);
        var obj = $('#J_ItemList .product-iWrap');
        console.log("obj.length",obj.length);
        var arr = [];
        obj.each(function(index,ele){
            var text = 
            $('.productTitle',this).text();
            var obj = {
                text,
       
            }
            arr.push(obj);

        })
        console.log('arr',arr);
    }
})