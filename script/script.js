// Variables
var passwordLength = prompt("Enter a number between 8 and 128");
var specialBoolean = confirm("Do you want to use special characters?");
var upperCaseBoolean = confirm("Do you want to use capital letters?");
var lowerCaseBoolean = confirm("Do you want to use lowecase letters?");
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

console.log(passwordLength);
console.log(specialBoolean);
console.log(upperCaseBoolean);
console.log(lowerCaseBoolean);

if (!passwordLength) {
  alert("You need to enter a value.");
} else if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("You need to choose between 8 and 128.");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
