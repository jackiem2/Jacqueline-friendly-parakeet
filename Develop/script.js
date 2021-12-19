// Assignment code here
var generateBtn = document.querySelector("#generate");

// variables

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];


// Password criteria
function passwordCriteria() {
var length = (prompt("Create a password between 8 to 128 characters"));
var askNumbers = confirm("Do you want numbers in your password?");
var askUpperCase = confirm("Do you want upper case letters in your password?");
var askLowerCase = confirm("Do you want lower case letters in your password?");
var askSpecial = confirm("Do you want special characters in your password?")
var answers = {
  length : length,
  askNumbers : askNumbers,
  askUpperCase : askUpperCase,
  askLowerCase : askLowerCase,
  askSpecial : askSpecial,
} 
if((length <8) || (length >128))
alert("Password must be between 8 and 128 characters");

}

// Generate password
function generatePassword() {
  var password = passwordCriteria();
  

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
