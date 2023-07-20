// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Generate password based on user criteria

// length of Password
function generatePassword() {
  var length = prompt(
    "Enter the desired password length:(between 8 and 128 characters"
  );
  length = parseInt(length);

  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Invalid length! Please enter a number between 8 and 128:");
    length = parseInt(length);
  }

  var lowercase = confirm(
    "Include lowercase letters? (Click 'Ok' for inclusion, or 'Cancel' to exclude)"
  );
  var uppercase = confirm(
    "Include uppercase letters? ((Click 'Ok' for inclusion, or 'Cancel' to exclude)"
  );
  var numbers = confirm(
    "Include numbers? (Click 'Ok' for inclusion, or 'Cancel' to exclude)"
  );
  var symbols = confirm(
    "Include symbols? (Click 'Ok' for inclusion, or 'Cancel' to exclude)"
  );

  var charset = "";
  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    charset += "0123456789";
  }
  if (symbols) {
    charset += "!@#$%^&*()-_=+{}[]|:;,.<>/?";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
