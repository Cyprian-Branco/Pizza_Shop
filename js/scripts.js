function pizzaOrder(size, crust){ 
    this.size = size
    this.crust = crust
}
function addresses(name, address, city){
    this.name = name
    this.address = address
    this.city = city
}
pizzaOrder.prototype.calculateCost = function(){
    var totalCost = this.size + this.crust
}
addresses.prototype.checkAddress = function(){
    return this.name + "," + this.address + "," + this.city
}
$(function(){
    $("#my_submit").click(function(event){
        event.preventDefault()
        var inputSize = $("input[name=size]:checked").val()
            if(inputSize == "small"){
                return 800
            }else if(inputSize == "medium"){
                return 1000
            }else if(inputSize == "large"){
                return 1300
            }else{
                alert("Kindly select the size of pizza you would like")
            }

        var inputCrust = $("input[name=crust]:checked").val()
            if (inputCrust == thin){
                return 300
            }else if(inputCrust == thick){
                return 500
            }else if(inputCrust == deep){
                return 500
            }else if(inputCrust == stuffed){
                return 400
            }else if(inputCrust == cheese-filled){
                return 400
            }else{
                alert("kindly select the crust you would like")
            }
        var deliveryFee = $(".delivery").val()
        var inputToppings = $("input[name=toppings]:checked").val()
        var newPizzaOrder = new pizzaOrder(inputSize, inputCrust)
        var newOrder = newPizzaOrder + deliveryFee

        $("#displaySize").text(inputSize)
        $("#displayCrust").tex(inpuSize)
        $("#displayToppings").text(inputToppings)
        $("#dislayTotalCost").text(newOrder)

        var newName = $("#name").val()
        var newAddress = $("#address").val()
        var newCity = $("#city").val()

        var newAddress = new addresses(newName, newAddress, newCity)
        $("#displayName").text() = newAddress + "." +"Your items will be delivered to the listed address."

    })
})
