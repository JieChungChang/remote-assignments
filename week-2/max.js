// Assigment 1

function max(...numberArray) {
	var currentMaxNumber = numberArray[0];

	for (var i = 1; i<numberArray.length; i++){

		if (numberArray[i] > currentMaxNumber) {
			currentMaxNumber = numberArray[i];
		}
	}
	return currentMaxNumber;
}
console.log('The answer of adssignment 1: ')
console.log('The max number of 1,2,3,4,5 is ' + max(1,2,3,4,5));
console.log('The max number of 5,2,7,1,6 is ' + max(5,2,7,1,6));
console.log('==============================')
 //End of assigment 1


 // Assignment 2

class argMaker {
	constructor(op, n1, n2) {
		this.op = op;
		this.n1 = n1;
		this.n2 = n2
	}
}

let arg1 = {
	op: "+",
	n1: 10,
	n2: 20
}

let arg2 = new argMaker("-",100,30);

function calculate(args){ let result;
	if(args.op==="+"){ 
		result=args.n1+args.n2;
	}
	else if(args.op==="-"){ 
		result=args.n1-args.n2;
	}
	else{
		result="Not supported";
	}

	return result; 
}

console.log('The answer of adssignment 2: ')
console.log( arg1.n1 + arg1.op + arg1.n2 + ' = ' + calculate(arg1));
console.log( arg2.n1 + arg2.op + arg2.n2 + ' = ' + calculate(arg2));
console.log('==============================')


 //End of assigment 2


 // Assigment 3
function avg(data){
	var count       = 0;
	var productsNum = data.size;

	for (var i = 0; i<productsNum; i+=1 ) {
		count+=data.products[i].price;
	}

	return count/productsNum; 
} 

var data = {
		size:3, 
		products:[
			{
				name:"coffee",
				price:100 
			},
			{
				name:"pizza",
				price:700 
			},
			{
				name:"cake",
				price:250 
			}
		]
	}

console.log('The answer of adssignment 3: ')
console.log('The average price of all product is ' + avg(data));
console.log('==============================')
//End of assigment 3