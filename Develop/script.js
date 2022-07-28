// Assignment Code
var generateBtn = document.querySelector("#generate");

var password;
var number;
var upperCaseLetter;
var lowerCaseLetter;
var specialCharacter;
var userChoice;

var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  password = prompt("How many characters do you want your password to be? (8 to 128 characters)");
  console.log("Password length " + password);

  if(!password) {
    password = prompt("Password isn't the length that is necessary (8 to 128 characters)");
    console.log("Password length " + password);

  } else {
    lowerCaseLetter = confirm("Do you want lowercase letters?");
    console.log("Lower case " + lowerCaseLetter);
    upperCaseLetter = confirm("Do you want uppercase letters?");
    console.log("Upper case " + upperCaseLetter);
    number = confirm("Do you want numbers?");
    console.log("Number " + number);
    specialCharacter = confirm("Do you want special characters");
    console.log("Special Character " + specialCharacter);
  };

  if(!lowerCaseLetter && !upperCaseLetter && !number && !specialCharacter) {
    userChoice
  }
}
