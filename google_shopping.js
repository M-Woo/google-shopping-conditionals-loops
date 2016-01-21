var data = require("./products.json")

// Write your solutions below
var q = 0
for (i = 0; i < data["items"].length; i++){

	if (data["items"][i].product.inventories[0].availability === "inStock"){
		q++;
	}
	
}
console.log("There are " + q + " items In Stock.");

var q = 0;
for (i = 0; i < data["items"].length; i++){
	if (data["items"][i].product.images.length > 1){
		q++;		
	}
}
console.log("There are " + q + " items with more than one image link.");

var q = 0;
for (i = 0; i < data["items"].length; i++){
	if (data["items"][i].product.brand.includes("anon")){
		q++;		
	}
}
console.log("There are " + q + " Canon branded items.");

var q = 0;
for (i = 0; i < data["items"].length; i++){
	if (data["items"][i].product.author.name.includes("eBay") && data["items"][i].product.brand.includes("anon")){
		q++;		
	}
}
console.log("There are " + q + " Canon branded items with the author eBay.");


for (i = 0; i < data["items"].length; i++){
	console.log("Product Brand: " + data["items"][i].product.brand + ", Product price: " + data["items"][i].product.inventories[0].price + ", image link: " + data["items"][i].product.link + ".");
	console.log("---------------------------------------------------------------------------------");			
	}



	//console.log(data["items"][0].product.inventories[0].availability);
	



//console.log(data["items"]);

//console.log(data["items"][1].kind);

