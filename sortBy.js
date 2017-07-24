const async = require('async');

let obj = [
	
	{name : 'bbb', time : 200},
	{name : 'aaa', time : 100},
	{name : 'ccc', time : 300},
];
/*
数组进行排序
值反向 * -1 就是倒叙
 */
async.sortBy(obj, function(i, cb) {  // 串行数据，进行排序，返回数组 
	//console.log(i)
	cb(null ,i.time);
},function(err, result) {
	console.log(result);
});

async.sortBy([1,9,3,5], function(x, callback) {
    callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
}, function(err,result) {
    console.log(result)
});