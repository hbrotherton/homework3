// Assignment Code
var generateBtn = document.querySelector("#generate");


//Arrays for random letters, numbers, symbols:

// Special characters 
characterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase characters
alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase characters
alphaUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
    var confirmLower = confirm("Would you like lowercase letters in your password?");
    var confirmUpper = confirm("Would you like uppercase letters in your password?");
    var confirmNumber = confirm("Would you like numbers in your password?")
    var confirmSpecial = confirm("Would you like special characters in your password?");
};
  //Validation for criteria (at least one true)
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    choices = alert("You must choose a criteria! Select 'Generate Password Again'");
  }

  console.log(passwordCharLength)




}



// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

