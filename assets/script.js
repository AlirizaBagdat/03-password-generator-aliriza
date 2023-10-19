// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passLength = prompt("Enter password length, 8 - 128 characters possible:")
  if ( passLength < 8 || passLength > 128) {
    alert("Invalid Length, Password must be between 8 and 128 characters.")
    return;
  }
  passwordText.value = password;
  var passCharacter = confirm("Would you like special characters? ")
  var passNumbers = confirm("Would you like numbers? ")
  var passUpper = confirm("Would you like upper case characters? ")
  var passLower = confirm("Would you like lower case characters? ")
  
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must include at least one character type.");
    return;

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+";
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