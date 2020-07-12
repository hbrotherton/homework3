// Assignment Code
var generateBtn = document.querySelector("#generate");


//Functions to generate random letters, numbers, symbols:
function generateRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSpecial(){
  const symbols = '!@#$%^&*(){}[]=<>/?,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Main function for password generation

function generatePassword(){
  //Question Set for variables
  var characterLength = prompt("How many characters would you like in your password (min=8, max=128)?");
  var confirmLower = confirm("Would you like lowercase letters in your password?");
  var confirmUpper = confirm("Would you like uppercase letters in your password?");
  var confirmNumber = confirm("Would you like numbers in your password?")
  var confirmSpecial = confirm("Would you like special characters in your password?");


}

// Write password to the #password input
function writePassword() {
    
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

