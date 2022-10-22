// Assignment code here
"use strict";
// adding symbols for password
const lowerLetters = `abcdefghijklmnopqrstuvwxyz`.repeat(165);
const upperLetters = lowerLetters.toUpperCase();
const numbers = `0123456789`.repeat(429);
const specialChars = ` !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~`.repeat(130);
// multiplication so there is 4290 of each type of characters
// stupid method i know, but javascript lets us use 2^53-1 elements in one string:)

// checkboxes
const lowerLettersCb = document.querySelector("#lowerCase");
const upperLettersCb = document.querySelector("#upperCase");
const numbersCb = document.querySelector("#numbers");
const specialCharsCb = document.querySelector("#specialChars");

// range input
const pwdLenRange = document.querySelector("#pwdLen");

function generatePassword() {
    // initial values
    let charSet = ``;
    let pwdLen = pwdLenRange.value;
    let pwd = ``;

    // setup charset
    if (lowerLettersCb.checked) {
        charSet += lowerLetters;
    }

    if (upperLettersCb.checked) {
        charSet += upperLetters;
    }

    if (numbersCb.checked) {
        charSet += numbers;
    }

    if (specialCharsCb.checked) {
        charSet += specialChars;
    }

    // if no checked boxes
    if (charSet === ``) {
        return `Check at least one box`;
    } else {
        // buffer bools to confirm that all selected chars present in the password
        let containsNumbersIfSelected = true;
        let containsUpperLettersIfSelected = true;
        let containsLowerLettersIfSelected = true;
        let containsSpecialCharsIfSelected = true;
        let ok = false;

        while (ok !== true) {
            pwd = ``;
            for (let i = 0; i < pwdLen; i++) {
                pwd += charSet.charAt(
                    Math.floor(Math.random() * charSet.length)
                );
            }

            //checks if password contains numbers
            containsNumbersIfSelected = numbersCb.checked
                ? /[0-9]/.test(pwd)
                : true;

            //checks if password contains upper case
            containsUpperLettersIfSelected = upperLettersCb.checked
                ? /[A-Z]/.test(pwd)
                : true;

            //checks if password contains lower case
            containsLowerLettersIfSelected = lowerLettersCb.checked
                ? /[a-z]/.test(pwd)
                : true;

            //checks if password contains special chars
            containsSpecialCharsIfSelected = specialCharsCb.checked
                ? /[ !\\"#$%&'()*+,\-./:;<=>?@[\]^_\`{|}~]/.test(pwd)
                : true;

            // false until all types of chars present in password
            ok =
                containsSpecialCharsIfSelected &&
                containsLowerLettersIfSelected &&
                containsNumbersIfSelected &&
                containsUpperLettersIfSelected;
        }
        // log generated password in console
        console.log(`Password ${pwd} generated`);
        // return generated password
        return pwd;
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
let counter = 0;
function writePassword() {
    if (counter > 0) {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    } else {
        let hiddenDivs = document.querySelectorAll(".hideUntilButtonClick");
        hiddenDivs.forEach((hidden) => {
            hidden.classList.remove("hideUntilButtonClick");
        });
        counter++;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
