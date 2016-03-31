var customerName = "Marco";
var price = 10;
var quantity = 2;
var totalPrice = 0;
var products = [
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone" ];
var prices = [10, 10, 199, 159];

var productsText = "";
var productsElement = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0] +"</span>" + products[0]+ "</li>";
productsElement.innerHTML = productsText;

productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[1] +"</span>" + products[1]+ "</li>";
productsElement.innerHTML = productsText;

productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[2] +"</span>" + products[2]+ "</li>";
productsElement.innerHTML = productsText;

productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[3] +"</span>" + products[3]+ "</li>";
productsElement.innerHTML = productsText;

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName;

var priceElement = document.getElementById("total-price");
priceElement.textContent = "$" + totalPrice;

var discount = 0.25;

totalPrice = prices[0] + prices[1] + prices[2] + prices[3];

discountPrice = (totalPrice * discount)

fullPrice = (totalPrice - discountPrice)

var totalPriceElement = document.getElementById("total-price");
totalPriceElement.textContent = fullPrice;

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
	greet = 'Good Morning';
else if (hrs >=12 && hrs <= 17)
	greet = 'Good Afternoon';
else if (hrs >=17 && hrs <= 24)
	greet = 'Good Evening';

	document.getElementById('lblGreetings').innerHTML = greet;