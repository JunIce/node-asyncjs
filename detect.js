let async = require('async');

let arr = [4, 2, 3, 4, 5, 6, 7, 8];

async.detect(arr , function(item, cb) {  //得到集合中满足条件的第一个数据, 并行数据
	//console.log(item)
    if (item == 4) {  
        cb(item);  
    }
}, function(result) {  
    console.info('1 find :' + result);  
});  

async.detectLimit(arr , 4 , function(item, cb) {  //选取数组的限制个数，根据数组原始方式取0-limit 并行数据
    if (item == 4) {  
        cb(item);  
    }
}, function(result) {  
    console.info('2 find :' + result);  
});  

//limit 3 没有
//limit 4 有结果

async.detectSeries(arr , function(item, cb) {  //数组一个个传入，有一个不符合都后面的都不执行
    if (item == 4) {  
        cb(item);  
    }
}, function(result) {  
    console.info('3 find :' + result);  
});  