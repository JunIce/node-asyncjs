const async = require('async');
//compose创建一个包括一组异步函数的函数集合，每个函数会消费上一次函数的返回值。把f(),g(),h()异步函数，组合成f(g(h()))的形式，通过callback得到返回值。
//　按顺序加入到队列中，按顺序执行，将上一个函数的结果作为下一个函数的值
//
function a(id, cb){
	console.log('function a');
	cb(null, id + 3)
}

function b(id, cb){
	console.log('function b');
	cb(null, id + 2)
}
function c(id, cb){
	console.log('function c');
	cb(null, id + 1)
}

var foo = async.compose(a,b,c);
foo(6,function(err,res) {
	console.log(err,res)
})
