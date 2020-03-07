// Assignment Code
// Setting global variables for the password characters
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
    // Make a loop for the logic
    // Setting all my variables that will generate the password
    let strength = prompt("How strong would you like your password to be? Must choose between 8-128 characters.");
    console.log(strength);
    if (strength >= 8 && strength <= 128) {
        let alpha = confirm("Do you want lowercase letters?");
        let alphaResult = "";

        let upper = confirm("Do you want uppercase letters?");
        let upperResult = "";

        let int = confirm("Do you want to include numbers?")
        let intResult = "";

        let char = confirm("Do you want special characters?");
        let charResult = "";

        let draftPassword = alphaResult + upperResult + intResult + charResult;

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

            if (alpha) { draftPassword += alphaResult.charAt(i); }
            if (upper) { draftPassword += upperResult.charAt(i); }
            if (int) { draftPassword += intResult.charAt(i); }
            if (char) { draftPassword += charResult.charAt(i); };

        }

        if (!alpha && !upper && !int && !char) {
            alert("You must choose an option.")
        }



        // Log the results of the above conditions
        // Make a draftPassword that will get scrambled for the finalPassword
        // Take the finalPassword and shrink it to the strength set by the user's input
        console.log(alphaResult, upperResult, intResult, charResult);
        let userPassword = draftPassword.substring(0, strength);
        let finalPassword = userPassword.split('').sort(function() { return 0.5 - Math.random() }).join('');
        console.log(draftPassword);
        console.log(userPassword);

        return finalPassword;

    } else {
        alert("Please input a number from 8 - 128."); // Will alert if conditions are outside the 8 - 128 strength of password
    }

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);