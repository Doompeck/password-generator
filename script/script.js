// Variables
var passwordLength;
var numbersBoolean;
var specialBoolean;
var upperCaseBoolean;
var lowerCaseBoolean;
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// This is the array based on confirmation choices.
var characterArray;
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  passwordLength = prompt("Enter a number between 8 and 128");
// Validating that any value has been entered for password length and if it meets the criteria.
  if (!passwordLength) {
    alert("You need to enter a value.");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You need to choose between 8 and 128.");
  } else {
    numbersBoolean = confirm("Do you want to use numbers?");
    specialBoolean = confirm("Do you want to use special characters?");
    upperCaseBoolean = confirm("Do you want to use capital letters?");
    lowerCaseBoolean = confirm("Do you want to use lowecase letters?");
  };

  // Validate that at least 1 variation was selected as follows:
  // Any choices selected:
  if (!numbersBoolean && !specialBoolean && !upperCaseBoolean && !lowerCaseBoolean) {
      characterArray = alert("No criteria selected.");
  } 
  //  All four choices selected:
  else if (numbersBoolean && specialChar && upperCaseBoolean && lowerCaseBoolean) {
    characterArray = numbers.concat(specialChar, upperCase, lowerCase);
  }  
  // Selections of 3 arrays:
  else if (specialChar && numbers && lowerCase) {
    characterArray = specialChar.concat(numbers, lowerCase);
  } else if (specialChar && numbers && upperCase) {
    characterArray = specialChar.concat(numbers, upperCase);
  }else if (numbers && upperCase && lowerCase) {
    characterArray = numbers.concat(upperCase, lowerCase);
  }else if (specialChar && upperCase && lowerCase) {
    characterArray = specialChar.concat(upperCase, lowerCase);
  }
  // Selections of 2 arrays:
  else if (upperCase && lowerCase) {
    characterArray = upperCase.concat(lowerCase);
  }else if (lowerCase && numbers) {
    characterArray = lowerCase.concat(numbers);
  }else if (upperCase && numbers) {
    characterArray = upperCase.concat(numbers);
  } else if (specialChar && lowerCase) {
    characterArray = specialChar.concat(lowerCase);
  } else if (specialChar && upperCase) {
    characterArray = specialChar.concat(upperCase);
  } else if (specialChar && numbers) {
    characterArray = specialChar.concat(numbers);
  }
  // Single selections:
  else if (specialChar) {
    characterArray = specialChar;
  } else if (numbers) {
    characterArray = numbers;
  } else if (upperCase) {
    characterArray = upperCase;
  } else if (lowerCase) {
    characterArray = lowerCase;
  }
  console.log(characterArray);
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
