// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays for random letters, numbers, symbols:
// Uppercase characters
alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase characters
alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Numeric characters
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters 
specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//Main function for password generation

function generatePassword(){
  //Question Set for variables
  var characterLengthQuestion = prompt("How many characters would you like in your password (min=8, max=128)?");
  
  //Numerical Value for length of password
  var passwordCharLength = parseInt(characterLengthQuestion)
 
  // Validation of user input loop
  if (!passwordCharLength) {
    alert("This needs a value");
} else if (passwordCharLength < 8 || passwordCharLength > 128) {
   
    // Start user input prompts
    passwordCharLength = parseInt(prompt("You must choose between 8 and 128"));
} else {
    // Continues once user input is validated
    var confirmUpper = confirm("Would you like uppercase letters in your password?");
    var confirmLower = confirm("Would you like lowercase letters in your password?");
    var confirmNumber = confirm("Would you like numbers in your password?")
    var confirmSpecial = confirm("Would you like special characters in your password?");
};
  //Validation for criteria (at least one true)
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
    choices = alert("You must choose a criteria! Select 'Generate Password Again'");
  }

  // if statement for 4 confirmed criteria
  else if (confirmUpper && confirmLower && confirmNumber && confirmSpecial) {
    var choices = alphaUpperArray.concat(alphaArray, numberArray, specialArray);
  }
  
  // if statements for 3 confirmed criteria
  else if (confirmUpper && confirmLower && confirmNumber) {
    var choices = alphaUpperArray.concat(alphaArray, numberArray);
  }
  else if (confirmUpper && confirmLower && confirmSpecial) {
    var choices = alphaUpperArray.concat(alphaArray, specialArray);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    var choices = alphaUpperArray.concat(numberArray, specialArray);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    var choices = alphaArray.concat(numberArray, specialArray);
  }

  // if statements for 2 confirmed criteria
  else if (confirmUpper && confirmLower) {
    var choices = alphaUpperArray.concat(alphaArray);
  }
  else if (confirmUpper && confirmNumber) {
    var choices = alphaUpperArray.concat(numberArray);
  }
  else if (confirmUpper && confirmSpecial) {
    var choices = alphaUpperArray.concat(specialArray);
  }
  else if (confirmLower && confirmNumber) {
    var choices = alphaArray.concat(numberArray);
  }
  else if (confirmLower && confirmSpecial) {
    var choices = alphaArray.concat(specialArray);
  }
  else if (confirmNumber && confirmSpecial) {
    var choices = numberArray.concat(specialArray);
  }

  // if statements for 1 confirmed criterion
  else if (confirmUpper) {
    var choices = alphaUpperArray;
  }
  else if (confirmLower) {
    var choices = alphaArray;
  }
  else if (confirmNumber) {
    var choices = numberArray;
  }
  else if (confirmSpecial) {
    var choices = specialArray;
  };

  // make password variable an empty array for a placeholder
  var password = [];

  // for loop to do random selection of variables and append them to the password empty array
  for (var i = 0; i < passwordCharLength; i++) {
    var finalChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(finalChoices);
  };

  var finalPassword = password.join("");
  
  //console.log shows it in the console, but return brings the value and ends the function so it can be grabbed by password variable in function writePassword

  // console.log(finalPassword)
  return finalPassword;
  
};



// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

