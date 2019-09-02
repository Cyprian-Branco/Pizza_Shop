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
