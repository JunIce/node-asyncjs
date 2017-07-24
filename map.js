let async = require('async');
//执行任务的时候，如果存在err，循环不会中断，会通过cb返回err，但最终的callback只能返回err前的数据。
async.map([1, 2, 3, 4, 5, 6, 7, 8], function(item, cb) {  
    console.info(item);  
    if (item == 4) {  
        cb('4 is bad');  
    } else {  
        cb(null, 'transformed ' + item);  
    }  
}, function(err, result) {  
    console.info('error：' + err);  
    console.info('result：' + result);  
});  

