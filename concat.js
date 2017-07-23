let async = require('async');

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

async.concat(arr , function(item, cb) {  
	console.log(item)
    if (item == 4) {  
        cb('throw err: ' + item);  
    } else {  
        console.info(item + ': true')  
    }  
}, function(err) {  
    console.info('catch err: ' + err);  
});  


