/*bussines logic*/
function order(type, size, crust, toppings){
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
order.prototype.fullorder = function() {
    return this.type + "with this as toppings" + this.toppings + "with" + this.crust + "as the crust" + "and should be " + this.size + "in size"
}
function total (price, quantity, delivery){
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery; 
}
total.prototype.finalTotal = function() {
    return this.price + this.quantity + this.delivery 
}
var sizePrice = [1300, 900, 680]
var deliverPrices = [0, 400];
$(document).ready(function () {
    $("form#myForm").submit(function (event) {
        event.preventDefault();
        var pizzaType = $("#type").val();
        var pizzaToppings = $("#toppings").val();
        var pizzaCrust = $("#crust").val();
        var pizzaSize = $parseInt(("#size")).val();
        var pizzaPICK = $parseInt(("#pick")).val();
        var price = sizePrice[pizzaSize - 1];
        var DeliveryCost = deliverPrices[pizzaPick - 1];
    
    
    newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaToppings);
    newTotal = new Total(price, pizzaQuantity, DeliveryCost);
    function getConfirmation() {
        if (pizzaPick === 1){ 
            confirm("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");): true;
    alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
    alert("your bill is: " + newTotal.finalTotal() + ".You will receive your pizza in the next few minutes");
    }else{
        if(pizzaPick === 2){
            prompt("Enter where you want your pizza to be delivered");
            alert("Your order has been received and it will be delivered. Continue to see your order details");
            alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
            alert("your bill is: " + newTotal.finalTotal() + ".You pizza will be delevered in the next 30minutes");
        }
    }
}

});

$('form#contactform').submit(function(event){
event.preventDefault();
var name = $('#name').val();
var pass = $('#email').val();
var mess = $('#message').val();
alert("Hello " + name + " ,Thank You for Contacting Us.");
});
});
