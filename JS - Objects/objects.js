// Creating an Object
// here is the JAvascript representation of a blue Bic ballpoint pen.

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

/* =====
Create a new object in javascript by setting its properties within a pair of curly braces: { ..... };
====== */

// The above code defines a variable named pen whose value is an object: you can therefore say pen is an object. This object has three properties: type, color, and brand. Each property has a name and a value and is separate by a comma, (except the last one).

// 

console.log(pen.type); // will be "ballpoint"
console.log(pen.color); // will be "blue"
console.log(pen.brand); // will be "Bic"

console.log('I am using a ' + pen.type + ' pen with a color of ' + pen.color + ' & its brands name is ' + pen.brand);



/* ====
Lets create a cake in javaScript that has serveral properties: 

        flavor, like vanilla, chocolate, etc.

        price in madibas

        layers(1, 2, 3.. .10 ? !)

=== */

let cake = {
    flavour: "vanilla",
    price: "R200",
    layers: "4",
    toppings: "Chocolate sprinkles"
}
console.log("I'm going to make a " + cake.flavour + " cake with " + cake.layers + " layers with toppings of " + cake.toppings + " and the cake will cost you " +  cake.price);

