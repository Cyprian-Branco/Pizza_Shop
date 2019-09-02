function Pizza(size, crust, toppings){
    this.size = size
    this.crust = crust
    this.toppings = toppings
}
Pizza.prototype.sizePrice = function(){
    if(this.size === "small"){
        return 800
    }else if(this.size === "medium"){
        return 1000
    }else if(this.zie === "large"){
        return 1300
    }else{
        alert("Please select the size you would prefer")
    }
}
Pizza.prototype.crustPrice = function(){
    if(this.crust === "thin"){
        return 300
    }else if(this.crust === "thick"){
        return 500
    }else if(this.crust === "deep"){
        return 500
    }else if(this.crust === "stuffed"){
        return 500
    }else if(this.crust === "cheese-filled"){
        return 500
    }else{
        alert("Please select the type of crust you would prefer")
    }
}
Pizza.prototype.toppingsPrice = function(){
    if(this.toppings === "chicken"){
        return 200
    }else if(this.toppings === "pepperoni"){
        return 200
    }else if(this.toppings === "cheese"){
        return 200
    }else if(this.toppings === "olive"){
        return 200
    }else{
        alert("Please select the type of crust you would prefer")
    }
}
Pizza.prototype.calclulatePrice = function(toppingsPrice, sizePrice, crustPrice){
    var totalCost = toppingsPrice + sizePrice + crustPrice
    $("#displayTotalCost").html(totalCost)
}
    var pizza;
    $(function(){
    $("#formid").submit(function(event){
        event.preventDefault()
        $("#show-bill").show()
        var inputtedName = $("#name").val()
        var inputtedAddress = $("#address").val()
        var inputtedCity = $("#city").val()
        var inputtedSize = $("input:radio[name=size]:checked").val()
        var inputtedToppings = $("input:radio[name=toppings]:checked").val()
        var inputtedCrust = $("input:radio[name=crust]:checked").val()
        
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