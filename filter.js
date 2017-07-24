const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];

async.filter(obj, function(i, cb) {  // 并行数据， 返回数组，
	console.log(i)
	cb(null ,i.time > 100)
},function(err, result) {
	console.log(result)
});

async.filterLimit(obj, 2 ,function(i, cb) {  // 并行数据， 返回数组，限制每次最大传入量
	console.log(i)
	setTimeout(function(){
		cb(null ,i.time >= 100);
	},1000);
},function(err, result) {
	console.log(result)
});

async.filterSeries(obj, function(i, cb) {  // 串行数据， 返回数组，限制每次最大传入量
	console.log(i)
	setTimeout(function(){
		cb(null ,i.time > 100);
	},1000);
},function(err, result) {
	console.log(result)
});