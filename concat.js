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

async.concat(['aa','bb'], function(i, callback){ // 并行方式处理
	setTimeout(function(){
		callback(null, [i,i]);
	},100)
}, function(err, data){
	console.error(err);
	console.log('result: ' + data);
	console.log(typeof data);
});

var data = {
    aaa: [11,22,33],
    bbb: [44,55],
    ccc: 66
};

var obj = [
	{name : 'aaa', delay : 100},
	{name : 'bbb', delay : 200},
	{name : 'ccc', delay : 300},

];

async.concat(obj, function(i, callback){
	setTimeout(function(){
		if(i.name == 'ccc') callback('error'); //如果中途出错，则把错误以及已经完成的操作的结果交给最后callback。未执行完的则忽略。
		else callback(null, data[i.name]);
	},i.delay);
}, function(err, data){
	console.error(err);
	console.log('result: ' + data);
	console.log(typeof data);
});