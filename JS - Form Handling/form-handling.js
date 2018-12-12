//Never trust user input


//It is vital to validate user inpute before sending it to a server(and again once it arrives there,but lets take things one step at a time)

// Validation can be as simple as making sure that the type of data is correct (number vs.string,valid email address,etc.);it can also be more comples-checking for password strngth,for ex,or parsing a commenet to make sure it contains no URLs.


// During input

// const passwordInput = document.getElementById('password-input');
// const submitButton = document.getElementById('submit-button');


// passwordInput.addEventListener('input', ($event) => {
//     if ($event.target.value.length >= 6 && $event.target.value.length <= 12){
//         submitButton.removeAttribute('disabled');
//     } else{
//         submitButton.setAttribute('disabled','true')
//     }
// });
// function myFunction() {
//     var x = document.getElementById("text-input");
//     x.value = x.value.toUpperCase();
// }

//after input

  //add a blur event listener to the comfirmPassword element.

    //Compare the value propertiws of both inputs


        //if they are the same,set the border styles to thin solid green and set the display style of errorMsg so that it disappears.

        //if they are different,set the boreder style sto thin solid red and set the display style of errorMsg so that it appears.
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');

confirmPassword.addEventListener('blur', () => {

   if(passwordInput.value === confirmPassword.value){
       passwordInput.style.border = 'solid green';
       confirmPassword.style.border = 'solid green';
       errorMsg.style.border = 'none';
   }
   else{
       passwordInput.style.border = 'solid red';
       confirmPassword.style.border = 'solid red';
       errorMsg.style.display= 'inline';
   }
})
var lowerCaseLetters = /[a-z]/g;
if(myInput.value.match(lowerCaseLetters)) {
 letter.classList.remove("invalid");
 letter.classList.add("valid");
} else {
 letter.classList.remove("valid");
 letter.classList.add("invalid");
}

// Validate capital letters
var upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
 capital.classList.remove("invalid");
 capital.classList.add("valid");
} else {
 capital.classList.remove("valid");
 capital.classList.add("invalid");
}

// Validate numbers
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
 number.classList.remove("invalid");
 number.classList.add("valid");
} else {
 number.classList.remove("valid");
 number.classList.add("invalid");
}

// Validate length
if(myInput.value.length >= :sunglasses: {
 length.classList.remove("invalid");
 length.classList.add("valid");
} else {
 length.classList.remove("valid");
 length.classList.add("invalid");
}