const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];

async.reduce(obj, 40,  function(memo, i, cb) {  //memo  即为底数， 此函数用来数组元素相加
	//console.log(i)
	cb(null ,i.time + memo);
},function(err, result) {
	console.log(result);
});

async.reduceRight(obj, 20 , function(memo , i, cb) {  // 反向遍历相加，返回一个元素，
	console.log(i);
	setTimeout(function(){
		cb(null ,i.time + memo);
	},1000);
},function(err, result) {
	console.log(result);
});
