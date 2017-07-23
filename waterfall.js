let async = require('async');

let obj = [{ a : 1},{b : 2},{c : 3}];


//不支持 json 格式的 task
console.time('waterfall innerFunction');
async.waterfall([
	function(callback){
		callback(null, obj[0]);
	},
	function(args, callback) {
		callback(null, obj[1]);
	},
	function(args, callback) {
		callback(null, obj[0]);
	}
],function(err, results) {
	console.log(results);
	console.timeEnd('waterfall innerFunction');
});


console.time('waterfall outerFunction');
async.waterfall([
	sayOneFunction,
	sayTwoFunction,
	sayThreeFunction
],function(err, results){
	console.log(results);
	console.timeEnd('waterfall outerFunction');
})


function sayOneFunction(cb) {
	cb(null, obj[0])
}

function sayTwoFunction(args, cb) {
	cb(null, obj[1])
}

function sayThreeFunction(args, cb) {
	cb(null, obj[0])
}