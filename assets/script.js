// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random password based on criteria
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+";
  var characterOrder = "";
  var password = "";

  var passLength = parseInt(prompt("Enter password length (8 - 128 characters):"));
  if (passLength < 8 || passLength > 128) {
    alert("Invalid length. Password must be between 8 and 128 characters.");
    return "";
  }

  var passLower = confirm("Include lowercase characters?");
  var passUpper = confirm("Include uppercase characters?");
  var passNumeric = confirm("Include numeric characters?");
  var passSpecial = confirm("Include special characters?");

  if (!passLower && !passUpper && !passNumeric && !passSpecial) {
    alert("You must include at least one character type.");
    return "";
  }

  if (passLower) {
    characterOrder += lowercaseChars;
  }
  if (passUpper) {
    characterOrder += uppercaseChars;
  }
  if (passNumeric) {
    characterOrder += numericChars;
  }
  if (passSpecial) {
    characterOrder += specialChars;
  }

  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterOrder.length);
    password += characterOrder[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
