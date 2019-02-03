function ajax(src, callback) {
	fetch(src).then(function(response){
		return response.json();
	}).then(result=> callback(result));
};

function render(data) {
	let list = document.createElement("div");
	list.id = "list";
	list.innerHTML="";
	
	let text = "";
	let product;
	let sum = 0;

	for(let i=0;i<data.length;i++){
		product=data[i];
		text += product.name.bold() + " - " + product.price + "<br/>" + product.description + "<hr/>";
		sum += parseInt(product.price );
	}

	text += 'Total: ' + sum;
	list.innerHTML = text; 
	document.body.appendChild(list);
};

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){ 
	render(response);
}); 