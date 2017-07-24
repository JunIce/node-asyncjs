const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];
/**
 * 对集合中的每一个元素，执行某个异步操作，得到结果。所有的结果将汇总到最终的callback里。与each的区别是，each只关心操作不管最后的值，而map关心的最后产生的值。
 *
 * 提供了两种方式：
 * 1. 并行执行。同时对集合中所有元素进行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的任务的结果，未执行完的占个空位
 * 2. 顺序执行。对集合中的元素一个一个执行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的结果，未执行的被忽略。
 */
async.map(obj, function(i, cb) {  // 并行数据， 返回数组， 用true和false表示是否符合
	//console.log(i)
	cb(null ,i.name);
},function(err, result) {
	console.log(result);
});

async.map(obj, function(i, cb) {  // 并行数据， 如果中途出错，立刻将错误、以及已经执行完成的结果汇总给最终callback。未执行完的将会在结果数组中用占个空位。
	//console.log(i)
	if(i.time == 200) cb('inside err');
	else cb(null ,i.name);
},function(err, result) {
	console.log(result);
});

async.mapLimit(obj, 2 ,function(i, cb) {  // 并行数据， 返回数组， 一次性返回结果数组
	// console.log(i);
	setTimeout(function(){
		cb(null ,i.time > 100);
	},1000);
},function(err, result) {
	console.log(result);
});

async.mapSeries(obj, function(i, cb) {  // 串行数据， 返回数组
	//console.log(i);
	setTimeout(function(){
		cb(null ,i.time > 100);
	},1000);
},function(err, result) {
	console.log(result);
});

//mapValues 专为对象设计
async.mapValues( // 用于遍历除value值
	{
		name : 'Jack',
		age : 22
	}, function(i,key, cb) {
		console.log(i); // 值
		console.log(key); // 键
}, function(err, res) {
	console.log(res);
});


//mapValues 专为对象设计
async.mapValuesLimit( // 用于遍历除value值,限制最大遍历元素
	{
		name : 'Jack',
		age : 22
	}, 1 ,function(i,key, cb) {
		console.log(i); // 值
		console.log(key); // 键
}, function(err, res) {
	console.log(res);
});

//mapValues 专为对象设计
async.mapValuesSeries( // 用于遍历除value值,只遍历对象一个元素 single
	{
		name : 'Jack',
		age : 22
	}, function(i,key, cb) {
		console.log(i); // 值
		console.log(key); // 键
}, function(err, res) {
	console.log(res);
});
