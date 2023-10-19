// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = prompt("enter password length")
var passCharacter = confirm("Would you like special characters? ")
var passNumbers = confirm("Would you like numbers? ")
var passUpper = confirm("Would you like upper case characters? ")
var passLower = confirm("Would you like lower case characters? ")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// Password Generator 

// create variables to store all options
// 1/ ask me what length password I want
// use prompt to get password length
    // check to make sure number is between 8-128 

// 2/ do you want special characters?
//use confirm
// 3/ do you want numbers?
//use confirm
// 4/ do you want upper
//use confirm
// 5/ lower case letters
//use confirm

// 6/ generate password
  // create array that holds users preferences 
  // look into Maths.Random to randomize selection
  // loop to select a random character from the array. 'length of password' iterations

// 7/ display it on html provided