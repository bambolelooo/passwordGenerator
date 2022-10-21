// Assignment code here

// adding symbols for password
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = lowerLetters.toUpperCase();
const numbers = "0123456789";
const specialChars = ` !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~`;

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
