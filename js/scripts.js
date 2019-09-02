function Pizza(size, crust, toppings){
    this.size = size
    this.crust = crust
    this.toppings = toppings
    this.delivery = delivery
}
Pizza.prototype.calclulatePrice = function(){
    var totalCost = this.size + this.crust + this.toppings + this.delivery
    $("#displayTotalCost").html(totalCost)
}
var pizza
$(function(){
    $("#formid").submit(function(event){
        event.preventDefault()
        $("#show-bill").show()
        var inputtedName = $("#name").val()
        var inputtedAddress = $("#address").val()
        var inputtedCity = $("#city").val()

        var inputtedSize = $("input:radio[name=size]:checked").val()
        var sizeAmount = 0
        if(inputtedSize === "small"){
            sizeAmount = 800
        }else if(inputtedSize === "medium"){
            sizeAmount = 1000
        }else if(inputtedSize === "large"){
            sizeAmount = 1300
        }else{
            alert("Please select the size you would prefer")
        }

        var inputtedToppings = $("input:radio[name=toppings]:checked").val()
        var toppingsAmount
        if(inputtedToppings === "chicken"){
            toppingsAmount = 200
        }else if(inputtedToppings === "pepperoni"){
            toppingsAmount = 200
        }else if(inputtedToppings === "cheese"){
            toppingsAmount = 200
        }else if(inputtedToppings === "olive"){
            toppingsAmount = 200
        }else{
            alert("Please select the type of crust you would prefer")
        }

        var inputtedCrust = $("input:radio[name=crust]:checked").val()
        var crustAmount = 0
        if(inputtedCrust === "chicken"){
            crustAmount = 200
        }else if(this.inputtedCrust === "pepperoni"){
            crustAmount = 200
        }else if(this.inputtedCrust === "cheese"){
            crustAmount = 200
        }else if(inputtedCrust === "olive"){
            crustAmount = 200
        }else{
            alert("Please select the type of crust you would prefer")
        }
        
        var deliveryFee = $(".delivery").val()

        $("#displayName").text(inputtedName)
        $("#displayAddress").text(inputtedAddress)
        $("#displayCity").text(inputtedCity)
        $("#displaySize").text(inputtedSize)
        $("#displayToppings").text(inputtedToppings)
        $("#displayCrust").text(inputtedCrust)

        pizza = new Pizza(sizeAmount, crustAmount, toppingsAmount, deliveryFee)

        
    })
})