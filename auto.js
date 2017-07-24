const async = require('async');

let obj = [
	{name : 'aaa', time : 100},
	{name : 'bbb', time : 200},
	{name : 'ccc', time : 300},
];

/*
auto(tasks, concurrencyopt, callbackopt)
tasks 任务对象
concurrency 并行任务最大数量
callback 回掉函数 
 */
/*
1.取数据
2.读数据
3.发出数据
 */
/**
* 如果中途出错，则会把错误交给最终callback，执行完任务的传给最终callback。未执行完成的函数值被忽略
*/
async.auto({
	getData : function(cb){
		cb(null, 'getData');
	},
	readData : ['getData', function(res, cb) {
		cb('myerr')
	}],
	sendData : ['readData', function(res, cb) {
		cb(null, res.readData)
	}]
},
function(err, res) {
	console.log('err is :',res);
});

/*
autoInject
自动注入
 */
async.autoInject({
	getData : function(cb){
		cb(null, 'getData');
	},
	readData : function(getData, cb) {
		cb(null,'myerr');
	},
	sendData : function(readData, cb) {
		cb(null, readData);
	}
},function(err, res) {
	console.log(res);
});