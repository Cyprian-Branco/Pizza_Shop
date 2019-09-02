function pizza(size, crust, toppings){
    this.size = size
    this.crust = crust
    this.toppings = toppings
}
pizza.prototype.sizePrice = function(){
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
pizza.prototype.crustPrice = function(){
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
pizza.prototype.toppingsPrice = function(){
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