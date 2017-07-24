const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];
/*
返回真假值，只要有一个元素符合条件即返回true
没有一个元素符合条件即返回false
 */
async.some(obj, function(i, cb) {  // 并行数据， 返回数组  
	//console.log(i)
	cb(null ,i.time < 100);
},function(err, result) {
	console.log(result);
});

async.someLimit(obj, 2 ,function(i, cb) {  // 并行数据， 返回对象，
	// console.log(i);
	setTimeout(function(){
		cb(null ,i.time >= 100);
	},1000);
},function(err, result) {
	console.log(result);
});

async.someSeries(obj, function(i, cb) {  // 串行数据， 返回对象，限制每次最大传入量
	//console.log(i);
	setTimeout(function(){
		cb(null ,i.time > 100);
	},1000);
},function(err, result) {
	console.log(result);
});