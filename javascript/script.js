// Assignment code here

// adding symbols for password
const lowerLetters = `abcdefghijklmnopqrstuvwxyz`;
const upperLetters = lowerLetters.toUpperCase();
const numbers = `0123456789`;
const specialChars = ` !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~`;

// checkboxes
const lowerLettersCb = document.querySelector("#lowerCase");
const upperLettersCb = document.querySelector("#upperCase");
const numbersCb = document.querySelector("#numbers");
const specialCharsCb = document.querySelector("#specialChars");

// range input
const pwdLenRange = document.querySelector("#pwdLen");

function generatePassword() {
    let charSet = ``;
    let pwdLen = pwdLenRange.value;
    let pwd = ``;
    console.log(`pwdLen = ${pwdLen}`);
    if (lowerLettersCb.checked) {
        charSet = charSet + lowerLetters;
    }

    if (upperLettersCb.checked) {
        charSet = charSet + upperLetters;
    }

    if (numbersCb.checked) {
        charSet = charSet + numbers;
    }

    if (specialCharsCb.checked) {
        charSet = charSet + specialChars;
    }
    console.log(`charSet = ${charSet}`);
    if (charSet.length === 0) {
        return `Check at least one box`;
    } else {
        let charSetLen = charSet.length;

        // buffer bools to confirm that all selected chars present in the password
        let containsNumbersIfSelected = true;
        let containsUpperLettersIfSelected = true;
        let containsLowerLettersIfSelected = true;
        let containsSpecialCharsIfSelected = true;

        let ok = false;
        while (ok !== true) {
            for (let i = 0; i < pwdLen; i++) {
                pwd += charSet.charAt(Math.floor(Math.random() * charSetLen));
            }

            if (numbersCb.checked) {
                if (/[0-9]+/.test(pwd)) {
                    containsNumbersIfSelected = true;
                } else containsNumbersIfSelected = false;
            }

            if (upperLettersCb.checked) {
                if (/[A-Z]+/.test(pwd)) {
                    containsUpperLettersIfSelected = true;
                } else containsUpperLettersIfSelected = false;
            }

            if (lowerLettersCb.checked) {
                if (/[a-z]+/.test(pwd)) {
                    containsLowerLettersIfSelected = true;
                } else containsLowerLettersIfSelected = false;
            }

            if (specialCharsCb.checked) {
                if (/[ !\\"#$%&'()*+,\-./:;<=>?@[\]^_\`{|}~]/.test(pwd)) {
                    containsLowerLettersIfSelected = true;
                } else containsLowerLettersIfSelected = false;
            }

            ok =
                containsSpecialCharsIfSelected &&
                containsLowerLettersIfSelected &&
                containsNumbersIfSelected &&
                containsUpperLettersIfSelected;
        }
    }
    return pwd;
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
