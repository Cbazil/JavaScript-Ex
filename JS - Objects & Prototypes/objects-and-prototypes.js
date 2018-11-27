
/* ========= Start of 1st activity
var anObject = {
    a: 2,
    b: 4
};


// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a); // will show 2
console.log(anotherObject.b); // will be undefined

========= End of 1st Activity */

// Cake prototype

// var Pastry = {
//     type: "",
//     flavour: "",
//     layers: 0,
//     price: "",
//     occasion: "",


// describe : function() {
//     var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and cost " + this.price + ".";
//     return description;
//     }
// };
// var muffin = Object.create(Pastry);
// muffin.type = "muffin";
// muffin.flavour = "blueberry";
// muffin.layers = "1";
// muffin.price = "R20";
// muffin.occasion = "wedding";

// var cake = Object.create(Pastry);
// cake.type = "cake";
// cake.flavour = "vanilla";
// cake.layers = "3";
// cake.price = "R100";
// cake.occasion = "birthday";

// console.log(muffin.describe());
// console.log(cake.describe());

// =============== 2018/11/27 ===============>


var Pastry = {
    // initialize the pastry
    init: function(type, flavour, layers, price, occasion){
        this.type = type;
        this.flavour = flavour;
        this.layers = layers;
        this.price = price;
        this.occasion = occasion;
    },

    // Describe the pastry
    describe: function() {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

var muffin = Object.create(Pastry);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

var cake = Object.create(Pastry);
cake.init("cake", "vanilla", 3, "R310", "birthday");

console.log(muffin.describe());
console.log(cake.describe());



// <=============== 2018/11/27 ===============