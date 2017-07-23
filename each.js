let async = require('async');

let arr = [1,2,3,4,5];

let a = async.each(arr, function(i,callback){
	if(i*i > 9) {
		callback(i)
	}
	console.log(i*i);
},function(err){
	console.log(err);
});


