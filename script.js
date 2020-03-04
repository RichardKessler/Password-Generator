// Assignment Code
var generateBtn = document.querySelector("#generate");
let alphaSmall = "";
let alphaLarge = generateBig();
let numbers = generateNumbers();
let special = generateSpecial();

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // let alphaSmall = generateSmall();
    // let alphaLarge = generateBig();
    // let numbers = generateNumbers();
    // let special = generateSpecial();

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
    console.log(passLength + " " + alphaSmall + " " + alphaLarge + " " + numbers + " " + special);


}

function generateSmall(passLength) {
    let alphaSmall = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (i = 0; i < passLength; i++) {
        alphaSmall += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    console.log(alphaSmall);
    return (alphaSmall);
}

function generateBig(passLength) {
    let results = "";
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (i = 0; i < passLength; i++) {
        results += alphabetUpper.charAt(Math.floor(Math.random() * alphabetUpper.length));
    }
    console.log(results);
    return (results);
}

function generateNumbers(passLength) {
    let results = "";
    let number = "0123456789";

    for (i = 0; i < passLength; i++) {
        results += number.charAt(Math.floor(Math.random() * number.length));
    }
    console.log(results);
    return (results);
}

function generateSpecial(passLength) {
    let results = "";
    let special = "!@#$%^&*(){}[];:~";

    for (i = 0; i < passLength; i++) {
        results += special.charAt(Math.floor(Math.random() * special.length));
    }
    console.log(results);
    return (results);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);