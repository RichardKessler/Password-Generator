// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generateAlphaCharacters(numberToGenerate, isUpperCase) {
    var results = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (i = 0; i < numberToGenerate; i++) {
        results += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    if (isUpperCase) {
        results = results.toUpperCase();
    }
    console.log(results);
    return (results);
}

function generateNumbers(numberToGenerate) {
    var results = "";
    var numbers = "0123456789";

    for (i = 0; i < numberToGenerate; i++) {
        results += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    console.log(results);
    return (results);
}

function generateSpecialCharacters(numberToGenerate) {
    var results = "";
    var specialCharacters = "!@#$%^&*(){}[]:;~";

    for (i = 0; i < numberToGenerate; i++) {
        results += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    }
    console.log(results);
    return (results);
}

lowerCasePart = generateAlphaCharacters(5, false);
upperCasePart = generateAlphaCharacters(5, true);
numbers = generateNumbers(20);
characters = generateSpecialCharacters(30);

createdCharacters = lowerCasePart + upperCasePart + numbers + characters;
console.log(createdCharacters);

// Randomize our final password
var finalPassword = createdCharacters.split('').sort(function() { return 0.5 - Math.random() }).join('');
console.log(finalPassword);