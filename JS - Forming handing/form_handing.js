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