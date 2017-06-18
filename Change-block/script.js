var form = document.querySelector('.form');
var arr;
var xhr = new XMLHttpRequest();
xhr.open("GET", "file.json" , true); 
xhr.onload = function(){
	
	arr = JSON.parse(xhr.responseText);
	var names = form.getElementsByClassName('name');
	var prices = form.getElementsByClassName('price');

	for(var i = 0; i < arr.length; i++){
		names[i].innerText = arr[i].name;
		prices[i].innerText = arr[i].price;

	}
}
xhr.send();
var count = document.querySelector('.count');
var total = document.querySelector('.total-price');
var price;
var inputs = document.querySelectorAll('input');
document.querySelector('select').addEventListener('change', totalPrice);
for( var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('change', function(){
		price = arr[this.value-1].price;
		document.querySelector('.selected').innerText = arr[this.value -1].name;
		totalPrice();
	})
}
function totalPrice(){

	total.innerText = count.value*price;

}


