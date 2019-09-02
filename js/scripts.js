function Pizza(size, crust, toppings){
    this.size = size
    this.crust = crust
    this.toppings = toppings
}
Pizza.prototype.calclulatePrice = function(){
    var totalCost = this.size + this.crust + this.toppings
    $("#displayTotalCost").html(totalCost)
}
$(function(){
    var pizza
    $("#formid").submit(function(event){
        event.preventDefault()
        $("#show-bill").show()
        var inputtedName = $("#name").val()
        var inputtedAddress = $("#address").val()
        var inputtedCity = $("#city").val()

        var inputtedSize = $("input:radio[name=size]:checked").val()
        if(inputtedSize === "small"){
            return 800
        }else if(inputtedSize === "medium"){
            return 1000
        }else if(inputtedSize === "large"){
            return 1300
        }else{
            alert("Please select the size you would prefer")
        }

        var inputtedToppings = $("input:radio[name=toppings]:checked").val()
        if(inputtedToppings === "chicken"){
            return 200
        }else if(inputtedToppings === "pepperoni"){
            return 200
        }else if(inputtedToppings === "cheese"){
            return 200
        }else if(inputtedToppings === "olive"){
            return 200
        }else{
            alert("Please select the type of crust you would prefer")
        }

        var inputtedCrust = $("input:radio[name=crust]:checked").val()
        if(inputtedCrust === "chicken"){
            return 200
        }else if(this.inputtedCrust === "pepperoni"){
            return 200
        }else if(this.inputtedCrust === "cheese"){
            return 200
        }else if(inputtedCrust === "olive"){
            return 200
        }else{
            alert("Please select the type of crust you would prefer")
        }
        
        $("#displayName").text(inputtedName)
        $("displayAddress").text(inputtedAddress)
        $("displayCity").text(inputtedCity)
        $("displaySize").text(inputtedSize)
        $("displayToppings").text(inputtedToppings)
        $("displayCrust").text(inputtedCrust)

        pizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings)

        var sizeAmount = pizza.sizePrice()
        var toppingsAmount = pizza.toppingsPrice()
        var crustAmount = pizza.crustPrice()

        pizza.calclulatePrice(sizeAmount, toppingsAmount, crustAmount)
    })
})