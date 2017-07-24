const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];

async.transform(obj, function( acc, i, index, cb) {  //async 类型转换 acc
	// console.log(i);
	// console.log(acc);
	// console.log(index);
	// console.log(cb);

	acc.push(i.time + 30);
	cb(null);
},function(err, result) {
	console.log(result);
});


async.transform(
{
	name : 'Jack',
	age : 22
}, function(obj, value, key, cb) { // 第一个参数 用来储存数组或者对象
	obj[key] = value + '_NA';
	cb(null);
},function(err, res){
	console.log(res);
});
