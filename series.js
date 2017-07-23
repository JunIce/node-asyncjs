"use esversion:6";
let async = require('async');

console.time('series');
async.series([
	function(callback) {
		callback(null, 'one');
	},
	function(callback) {
		callback(null, 'two');
	}
],
function (err, results) {
	console.log('results: '+ results);
	console.timeEnd('series');
});







