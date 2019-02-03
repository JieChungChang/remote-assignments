var myTimeOutVar;

function delayedResult(n1, n2, delayTime, callback){
	// your code here
	const result = n1 + n2;
	myTimeOutVar = window.setTimeout(callback, delayTime, result);
};

delayedResult(4, 5, 3000, function(result){
	console.log(result);
});

delayedResult(-5, 10, 2000, function(result){
	window.alert(result);
});