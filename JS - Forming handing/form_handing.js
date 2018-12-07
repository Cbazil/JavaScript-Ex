// Validation can be as simple as making sure that the type of data is correct(number vs.string, valid email address, etc.); it can also be more complex - checking for password strength, for example , or parsing a comment to sure it contains no URLs.

// During input

const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');

passwordInput.addEventListener ( 'input', ($event) => {
    if($event.target.value.length >= 6 && $event.target.value.length <= 12) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }

});

// the input event is triggered whenever the user enters data into a given < input > element. We can use this to check data as it is entered.

// Add a blur event listener to confirmPassword element.

// Compare the value properties of both inputs.

    // If they are the same, set the border styles to thin solid green and set the display style of errorMsg so that it disppears

    // If there are different, set the border styles to thin solid red and set the display style of errorMsg so that it appears