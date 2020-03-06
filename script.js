// Assignment Code
var generateBtn = document.querySelector("#generate");
let alphaSmall = "abcdefghijklmnopqrstuvwxyz";
let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()_+-=[]{}|\?><,/;':";


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    console.log(password);
    passwordText.value = password;
}

function generatePassword() {
    // make a loop for the logic
    let strength = prompt("How strong would you like your password to be? Must choose between 8-128 characters.  Must chose at least 1 option.");
    console.log(strength);
    if (strength > 8 && strength < 128) {
        let alpha = confirm("Do you want lowercase letters?");
        let alphaResult = "";

        let upper = confirm("Do you want uppercase letters?");
        let upperResult = "";

        let int = confirm("Do you want to include numbers?")
        let intResult = "";

        let char = confirm("Do you want special characters?");
        let charResult = "";

        for (let i = 0; i < parseInt(strength); i++) {

            if (alpha) {
                alphaResult += alphaSmall.charAt(Math.floor(Math.random() * alphaSmall.length));
            }
            // console.log(alphaResult);

            if (upper) {
                upperResult += caps.charAt(Math.floor(Math.random() * caps.length));
            }
            // console.log(upperResult);

            if (int) {
                intResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
            // console.log(intResult);

            if (char) {
                charResult += special.charAt(Math.floor(Math.random() * special.length));
            }

        }

        console.log(alphaResult, upperResult, intResult, charResult);
        let draftPassword = alphaResult + upperResult + intResult + charResult;
        let finalPassword = draftPassword.split('').sort(function() { return 0.5 - Math.random() }).join('');
        let userPassword = finalPassword.substring(0, strength);
        console.log(draftPassword);
        console.log(finalPassword);

        return userPassword;
        // return alphaResult, upperResult, intResult, charResult, finalPassword;
        // return finalPassword;
    } else {
        alert("Please input a number from 8 - 128.");
        let strength = prompt("How strong do you want your password?");
        console.log(strength);
    }
    // let alpha = confirm("Do you want lowercase letters?");
    // let alphaResult = "";

    // let upper = confirm("Do you want uppercase letters?");
    // let upperResult = "";

    // let int = confirm("Do you want to include numbers?")
    // let intResult = "";

    // let char = confirm("Do you want special characters?");
    // let charResult = "";

    // let finalPassword = "";



    // for (let i = 0; i < parseInt(strength); i++) {

    //     if (alpha) {
    //         alphaResult += alphaSmall.charAt(Math.floor(Math.random() * alphaSmall.length));
    //     }
    //     // console.log(alphaResult);

    //     if (upper) {
    //         upperResult += caps.charAt(Math.floor(Math.random() * caps.length));
    //     }
    //     // console.log(upperResult);

    //     if (int) {
    //         intResult += numbers.charAt(Math.floor(Math.random() * numbers.length));
    //     }
    //     // console.log(intResult);

    //     if (char) {
    //         charResult += special.charAt(Math.floor(Math.random() * special.length));
    //     }
    //     // console.log(charResult);
    //     // let draftPassword = alphaResult + upperResult + intResult + charResult;
    //     // let finalPassword = draftPassword.split('').sort(function() { return 0.5 - Math.random() }).join('');
    //     // console.log(draftPassword);
    //     // console.log(finalPassword);
    //     // return finalPassword;
    // }

    // console.log(alphaResult, upperResult, intResult, charResult);
    // let draftPassword = alphaResult + upperResult + intResult + charResult;
    // let finalPassword = draftPassword.split('').sort(function() { return 0.5 - Math.random() }).join('');
    // let userPassword = finalPassword.substring(0, strength);
    // console.log(draftPassword);
    // console.log(finalPassword);

    // return userPassword;
    // // return alphaResult, upperResult, intResult, charResult, finalPassword;
    // // return finalPassword;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);