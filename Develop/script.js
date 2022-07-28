// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordConfirm;
var numberConfirm;
var upperCaseLetterConfirm;
var lowerCaseLetterConfirm;
var specialCharacterConfirm;
var userChoice;

var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCaseLetter = lowerCaseLetter.map(toUpper);
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
  passwordLength = prompt("How many characters do you want your password to be? (8 to 128 characters)");
  console.log("Password length " + passwordLength);

  if(!passwordLength) {
    passwordLength = prompt("Password isn't the length that is necessary (8 to 128 characters)");
    console.log("Password length " + passwordLength);

  } else {
    lowerCaseLetterConfirm = confirm("Do you want lowercase letters?");
    console.log("Lower case " + lowerCaseLetter);
    upperCaseLetterConfirm = confirm("Do you want uppercase letters?");
    console.log("Upper case " + upperCaseLetter);
    numberConfirm = confirm("Do you want numbers?");
    console.log("Number " + number);
    specialCharacterConfirm = confirm("Do you want special characters");
    console.log("Special Character " + specialCharacter);
  };

  if(!lowerCaseLetterConfirm && !upperCaseLetterConfirm && !numberConfirm && !specialCharacterConfirm) {
    userChoice = alert("");

  } 
  
  else if (lowerCaseLetterConfirm && upperCaseLetterConfirm && numberConfirm && specialCharacterConfirm) {
    userChoice = lowerCaseLetter.concat(upperCaseLetter, number, specialCharacter);
    console.log(userChoice);
  }

  else if (lowerCaseLetterConfirm && upperCaseLetterConfirm && specialCharacter) {
    userChoice = lowerCaseLetter.concat(upperCaseLetter, specialCharacter);
    console.log(userChoice);
  }

  else if (lowerCaseLetterConfirm && upperCaseLetterConfirm && numberConfirm) {
    userChoice = lowerCaseLetter.concat(upperCaseLetter, number);
    console.log(userChoice);
  }

  else if (upperCaseLetterConfirm && numberConfirm && specialCharacter) {
    userChoice = lowerCaseLetter.concat(number, specialCharacter);
    console.log(userChoice);
  }

  else if (upperCaseLetterConfirm && numberConfirm && specialCharacter) {
    userChoice = upperCaseLetter.concat(number, specialCharacter);
    console.log(userChoice);
  }

  else if (lowerCaseLetterConfirm && upperCaseLetterConfirm) {
    userChoice = lowerCaseLetter.concat(upperCaseLetter);
    console.log(userChoice);
  }

  else if (lowerCaseLetterConfirm && numberConfirm) {
    userChoice = lowerCaseLetter.concat(number);
    console.log(userChoice);
  }
  else if (lowerCaseLetterConfirm && specialCharacter) {
    userChoice = lowerCaseLetter.concat(specialCharacter);
    console.log(userChoice);
  }
  else if (upperCaseLetterConfirm && numberConfirm) {
    userChoice = upperCaseLetter.concat(number);
    console.log(userChoice);
  }
  else if (upperCaseLetterConfirm && specialCharacter) {
    userChoice = upperCaseLetter.concat(specialCharacter);
    console.log(userChoice);
  }
  else if (numberConfirm && specialCharacter) {
    userChoice = number.concat(specialCharacter);
    console.log(userChoice);
  }
  else if (lowerCaseLetterConfirm) {
    userChoice = lowerCaseLetter;
    console.log(userChoice);
  }
  else if (upperCaseLetterConfirm) {
    userChoice = blankUpper.concat(upperCaseLetter);
    console.log(userChoice);
  }
  else if (numberConfirm) {
    userChoice = number;
    console.log(userChoice);
  }
  else if (specialCharacterConfirm) {
    userChoice = specialCharacter;
    console.log(userChoice);
  }


var passwordChoice = [];

for (var i = 0; i < passwordLength; i++) {
  var finalChoice = userChoice[Math.floor(Math.random() * userChoice.length)];
  passwordChoice.push(finalChoice);
  console.log(finalChoice);
}

var password = passwordChoice.join("");
console.log('Your Password is: ' + password);
return password;
}