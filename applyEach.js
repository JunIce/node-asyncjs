const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];

var age = 20;

async.applyEach(
[
	function getAge(age, cb){ cb(null, age)},
	function setAge(age, cb){ cb(null, age)}
], age , function(err , res) {
	console.log(res)
});

async.applyEach( // 函数可以以对象的方式传入， 数据并行
{
	getAge : function (age, cb){
		setTimeout(function(){
			cb(null, age);
		},1000); 
	},
	setAge : function (age, cb){
		setTimeout(function(){
			cb(null, age);
		},1000); 
	}
}, age , function(err , res) {
	console.log(res)
});

async.applyEachSeries( // 函数可以以对象的方式传入, 数据串行
{
	getAge : function (age, cb){ 
		setTimeout(function(){
			cb(null, age);
		},1000); 
	},
	setAge : function (age, cb){ 
		setTimeout(function(){
			cb(null, age);
		},1000); 
	}
}, age , function(err , res) {
	console.log(res)
});


var fns = async.applyEachSeries( // 函数可以以对象的方式传入, 数据串行
{
	getAge : function (age, cb){ 
		setTimeout(function(){
			cb(null, age);
		},1000); 
	},
	setAge : function (age, cb){ 
		setTimeout(function(){
			cb(null, age);
		},1000); 
	}
});

fns(age , function(err , res) { // 当只传入第一个函数对象或者数组时， 提供传入参数入口
	console.log(res)
});
