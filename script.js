// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    let passLength = prompt("How long do you want your password to be?  Please choose 8-128");
    if (passLength < 8 || passLength > 128) {
        alert("Please input a number from 8 to 128.");
        prompt("How long do you want your password to be?");
    }

    let alphaSmall = confirm("Do you want lowercase letters?");
    if (alphaSmall) {
        alert("Thank you");
    } else {
        alert("Got it");
    }

    let alphaLarge = confirm("Do you want uppercase letters?");
    if (alphaLarge) {
        alert("Thank you");
    } else {
        alert("Got it");
    }

    let numbers = confirm("Do you want numbers?");
    if (numbers) {
        alert("Thank you");
    } else {
        alert("Got it");
    }

    let special = confirm("Do you want special characters?");
    if (special) {
        alert("Thank you");
    } else {
        alert("Got it");
    }

}
console.log(passLength + " " + alphaSmall + " " + alphaLarge + " " + numbers + " " + special);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);