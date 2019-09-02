function Pizza(size, crust, toppings, delivery){
    this.size = size
    this.crust = crust
    this.toppings = toppings
    this.delivery = delivery
}
Pizza.prototype.calclulatePrice = function(){
    var totalCost = this.size + this.crust + this.toppings + this.delivery
    $("#displayTotalCost").html(totalCost)
}

$(function(){
    $("#formid").submit(function(event){
        event.preventDefault()
        $("#show-bill").show()
        var inputtedName = $("#name").val()
        var inputtedAddress = $("#address").val()
        var inputtedCity = $("#city").val()

        var inputtedSize = $("input[name='size']:checked").val()
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

        var inputtedToppings = $("input[name='toppings']:checked").val()
        var toppingsAmount
        if(inputtedToppings === "chicken"){
            toppingsAmount = 300
        }else if(inputtedToppings === "pepperoni"){
            toppingsAmount = 500
        }else if(inputtedToppings === "cheese"){
            toppingsAmount = 500
        }else if(inputtedToppings === "olive"){
            toppingsAmount = 400
        }else{
            alert("Please select the type of crust you would prefer")
        }

        var inputtedCrust = $("input[name='crust']:checked").val()
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
        var pizza
        pizza = new Pizza(sizeAmount, crustAmount, toppingsAmount, deliveryFee)
        $("#displayName").text(inputtedName)
        $("#displayAddress").text(inputtedAddress)
        $("#displayCity").text(inputtedCity)
        $("#displaySize").text(inputtedSize)
        $("#displayToppings").text(inputtedToppings)
        $("#displayCrust").text(inputtedCrust)
        &("#displayTotalCost").text(pizza)   
    })
})