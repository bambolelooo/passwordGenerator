// Assignment code here

// adding symbols for password
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = lowerLetters.toUpperCase();
const numbers = "0123456789";
const specialChars = ` !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~`;

// checkboxes
const lowerLettersCb = document.querySelector("#accept");
const upperLettersCb = document.querySelector("#accept");
const numbersCb = document.querySelector("#accept");
const specialCharsCb = document.querySelector("#accept");

// range input
const qttyOfCharsRange = document.querySelector("#qttyOfChars");

function generatePassword() {
    let charSet = "";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
