// What's a condition?

// Suppose we want to write a program that makes a user enter a number and then displays a message
// 


/* ======= Enter a number 
If the number is positive
Display Message ======
*/

// The message should display only if the number is positive: this means it's subject to condition.

// The if statement 


// =======================================================


// var number = Number(prompt('Enter a number : '));
// if (number > 0) {
//     console.log(number + ' is positive');
// }
// else if(number < 0){
//     console.log(number + ' is a Negative')
// }
// else{
//     console.log(number + ' is zero');
// }

// =======================================================

// Writes a program that helps students decide what to wear based on the weathercondition by using the if, else or if else statements . Use weathers like: Sunny, Rainny, cloudy, windy, Snowwy 



    var weather = prompt('How is the weather Like?');
    var sunny = 'Wear T-Shirt and shorts';
        rainny = 'Wear a Jacket';
        snowwy = 'Stay inSide';
        cloudy = 'Wear your favorite gear';

    if (weather === 'sunny'){
        console.log(sunny);
    }
    else if (weather === 'rainny'){
        console.log(rainny);
    }
    else if (weather === 'snowwy'){
        console.log(snowwy);
    }
    else if (weather === 'cloudy'){
        console.log(cloudy)
    }
    else {
        console.log('Not a valid weather type');
    }


// =======================================================


// Basic syntax:

// if (condition) {
// statements executed when the condition is true   
// }

// The pair of opening and closing braces defines what is called a bloack of code assoiciated with an if statement. This statement represents a test. It can result in the following: "If the condition is tru, then execute the instructions" contained in the code block.


// The condition is always placed in a parenthesis after the if. 

// Conditions 

// A condition is an expression that evaluates weather something is true or false. When the value of a condition is true 


// Any expression producing a boolean  value (either true or false) can be used as a condition in an if statement. If the value of this expression is true, the code block associated with it is executed

// Boolean expressions can be created using the comparison operators

// === Equals to
// !== Not Equal to
// < less thamn 
// <= less than or eqaul to
// > greater than 
// >- greater than or equal to

// Alternative Conditions.


// ===============================================

// var age = Number(prompt('Whats your age'));
// if (age <= 12) {
//     console.log('You are not allowed to watch the horror Movie');
// }
// else {
//     console.log('You are allowed');
// }

// ==============================================
