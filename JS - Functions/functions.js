/* ======= Functions ======= */

// A function is a group of instuctions that performs a particular task

/*
function sayHello() {
    console.log('Hello');
}
console.log('Start of Program')
sayHello();
console.log('End of Program');
*/


function greetingUser() {
    var name = String(prompt('Enter Your name:'));
    console.log('Hello ' + name);
}
console.log('Start of Function');
greetingUser();
console.log('End of Function');
