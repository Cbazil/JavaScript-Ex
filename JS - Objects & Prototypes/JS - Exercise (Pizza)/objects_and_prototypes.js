var Pizza = {
    // Method init
    init: function(type, base, layers, toppings, price){
        this.type = type;
        this.base = base;
        this.layers = layers;
        this.toppings = toppings;
        this.price = price;
    },

    // Describe the pizza

    describe: function(){
        var description = "The " + this.type + " pizza has a " + this.base + " base with " + this.layers + " layers topped with " + this.toppings + " and all this will cost you.. " + this.price + ".";
        return description;
    },
    
    /* ======== How long it takes to make pizza | Start ========= */
    wait: function(){
        var time = this.type + " pizza was added to the oven and it will take 7 minutes.";
        return time;
    }
    /* ======== How long it takes to make pizza | End ========= */
};

var vegaterean = Object.create(Pizza);
vegaterean.init("vegaterean", "thick", 2, "two cheeses, garlic plus pineapple", "R200");

var halaal = Object.create(Pizza);
halaal.init("halaal", "thin", 3, "chicken, cheese plus mushrooms", "R180");

var meaty = Object.create(Pizza);
meaty.init("meaty", "thin", 2, "bacon plus cheese", "R180");

console.log(halaal.describe()+ ".." + halaal.wait());
console.log(meaty.describe() + ".." + meaty.wait());
console.log(vegaterean.describe() + ".." + vegaterean.wait());







// <=============== 2018/11/27 ===============