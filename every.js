const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];

async.every(obj, function(i, callback){ //如果集合里每一个元素都满足条件，则传给最终回调的result为true，否则为false, 并行数据
	 console.log(i.time);
	callback(null, i.name > 100);
}, function(err, result) {
	console.log('result : ',result);
	console.info(result === true);

});//只返回true 和 false

async.everyLimit(obj, 2, function(i, callback){ //限制传入数组的最大个数，并行数据
	// console.log(i.time);
	callback(null, i.time < 200);
}, function(err, result) {
	console.log('result : ',result);
	console.info(result === false);
});//只返回true 和 false

async.everySeries(obj, function(i, callback){ //，串行数据
	// console.log(i.time);
	callback(null, i.time > 200);
}, function(err, result) {
	console.log('result : ',result);
	console.info( result === false);
});//只返回true 和 false