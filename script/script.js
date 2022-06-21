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
  else if (specialBoolean && numbersBoolean && lowerCaseBoolean) {
    characterArray = specialChar.concat(numbers, lowerCase);
  } else if (specialBoolean && numbersBoolean && upperCaseBoolean) {
    characterArray = specialChar.concat(numbers, upperCase);
  }else if (numbersBoolean && upperCaseBoolean && lowerCaseBoolean) {
    characterArray = numbers.concat(upperCase, lowerCase);
  }else if (specialBoolean && upperCaseBoolean && lowerCaseBoolean) {
    characterArray = specialChar.concat(upperCase, lowerCase);
  }
  // Selections of 2 arrays:
  else if (upperCaseBoolean && lowerCaseBoolean) {
    characterArray = upperCase.concat(lowerCase);
  }else if (lowerCaseBoolean && numbersBoolean) {
    characterArray = lowerCase.concat(numbers);
  }else if (upperCaseBoolean && numbersBoolean) {
    characterArray = upperCase.concat(numbers);
  } else if (specialBoolean && lowerCaseBoolean) {
    characterArray = specialChar.concat(lowerCase);
  } else if (specialBoolean && upperCaseBoolean) {
    characterArray = specialChar.concat(upperCase);
  } else if (specialBoolean && numbersBoolean) {
    characterArray = specialChar.concat(numbers);
  }
  // Single selections:
  else if (specialBoolean) {
    characterArray = specialChar;
  } else if (numbersBoolean) {
    characterArray = numbers;
  } else if (upperCaseBoolean) {
    characterArray = upperCase;
  } else if (lowerCaseBoolean) {
    characterArray = lowerCase;
  }
// empty array for every password generated.  Prevents overlapping multiple password generations.
  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var passwordChoice = characterArray[Math.floor(Math.random() * characterArray.length)];
    password.push(passwordChoice);
    }

  // Injects the password as a string in the text area element in the html.
    var passwordText = document.querySelector("#password");
    passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
