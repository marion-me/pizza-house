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
    return this this.price + this.quantity + this.delivery 
}
var sizePrice = [1300, 900, 680]
var deliverPrices = [0, 400];
$(document).ready(function () {
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var pizzatype = $(#type).val();
        var pizzatoppings = $(#toppings).val();
        var pizzacrust = $(#crust).val();
        var pizzasize = $parseint((#size).val)
        var pizzaprice = $(#price).val();
        
/*business logic*/
$("#contactform").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var text = $("#message").val();
    alert("Hello " + name + " ,Thank You for Contacting Us.");
});
