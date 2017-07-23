let async = require('async');

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

async.eachSeries(arr , function(item, cb) {  
    if (item == 4) {  
        cb('throw err: ' + item);  
    } else {  
        cb();  
    }  
}, function(err) {  
    console.info('catch err: ' + err);  
});  


