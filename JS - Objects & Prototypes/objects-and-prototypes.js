

var anObject = {
    a: 2
};


// Create anotherObject using anObject as a prototype
var anotherObject = Object.create(anObject);

console.log(anotherObject.a) // will show 2