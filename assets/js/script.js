// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign Arrays 
const lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z", 
];
const numericArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharactersArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "_",
  "-",
  "=",
  "+"
];
//Function Generate Password
function generatePassword() {
  // Needs to prompt user for length of password
  let generatedPassword = "";
  let passwordLength = prompt("What length would you like your password to be?", "Between 8-128");
  let chosenLength = parseInt(passwordLength)
  if(chosenLength < 129 && passwordLength > 7){
  // Confirms for Upper Case, Lower Case, Special Characters, and numericals. 
  let lowerCase = confirm("Would you like to use Lower Case Characters?");
  let upperCase = confirm("Would you like to use Upper Case Characters?");
  let numeric = confirm("Would you like to use Numeric Characters?");
  let specialCharacters = confirm("Would you like to use Special Characters?");
  // Validate input and make sure at least one character type was selected.

  if(!lowerCase && !upperCase && !numeric && !specialCharacters) {
    alert("Please select the characters you would like in your password.");
    return null;
  }
  let charsForPass = [];   
      if(lowerCase== true) {
        charsForPass= charsForPass.concat(lowerCaseArr);
      } 
      if (upperCase == true) {
        charsForPass= charsForPass.concat(upperCaseArr);
      }
      if (numeric == true) {
        charsForPass= charsForPass.concat(numericArr);
      }
      if (specialCharacters == true){
        charsForPass= charsForPass.concat(specialCharactersArr);
      }
      // Logic below to generate password based off of users selections,
      for (let index = 0; index < chosenLength; index++) {
        // Grab random character based on selections
        const randChar =charsForPass[Math.floor(Math.random() * charsForPass.length)];
      
        generatedPassword += randChar;
      }
     
    } else {
      alert("You need to choose number between 8 and 128");
    }
     
    
  // Return a value to the password box
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   
   
    
    