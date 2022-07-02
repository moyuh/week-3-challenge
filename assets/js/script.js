// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign Arrays 
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
];
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specialCharacters = "!@#$%^&*_-=+";
var password =[];

function generatePassword() {
  // needs to prompt user for length of password
  let passwordLength = prompt("What length would you like your password to be?", "Between 8-128");
  // Confirms for Upper Case, Lower Case, Special Characters, and numericals. =>booleans (confirm then if else)
  let lowerCase = confirm("Would you like to use Upper Case Characters?");
  let upperCase = confirm("Would you like to use Lower Case Characters?");
  let numeric = confirm("Would you like to use Numeric Characters?");
  let specialCharacters = confirm("Would you like to use Special Characters?");

  let chosenLength = parseInt(passwordLength)
  // return a value to the password box
  return password;
}
  
// Write password to the #password input
function writePassword() {
  if (chosenLength < 7){
    if(chosenLength > 128){
      if(lowerCase== true); {
 //logic goes here        
      }
      if (upperCase == true); {
  // logic goes here 
      }
      if (numeric == true); {
  // logic goes here
      }
      if (specialCharacters == true);{
  // logic goes here       
      }
    }
  }
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Assign arrays
//Function Generate Password
    // needs to prompt user for length of password
    // Confirms for Upper Case, Lower Case, Special Characters, and numericals. =>booleans (confirm then if else)
    // Validate input and make sure at least one character type was selected (if, else)
    // Generate password based off of users selections, UNIQUE MATH <3
    // Return Password to box