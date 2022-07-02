// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign Arrays 
const lowerCase = [
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
const upperCase = [
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
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = "!@#$%^&*_-=+";
var password =[];

function generatePassword() {
  // needs to prompt user for length of password
  let passwordLength = prompt("What length would you like your password to be?", "Between 8-128");
  let chosenLength = parseInt(passwordLength)
    if(chosenLength < 128 && passwordLength > 7){
  // Confirms for Upper Case, Lower Case, Special Characters, and numericals. =>booleans (confirm then if else)
  let lowerCase = confirm("Would you like to use Upper Case Characters?");
  let upperCase = confirm("Would you like to use Lower Case Characters?");
  let numeric = confirm("Would you like to use Numeric Characters?");
  let specialCharacters = confirm("Would you like to use Special Characters?");
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
    }
    else {
      alert("Sorry You need to select a number between 8 and 128")
    }
  // return a value to the password box
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

//Assign arrays
//Function Generate Password
    // needs to prompt user for length of password
    // Confirms for Upper Case, Lower Case, Special Characters, and numericals. =>booleans (confirm then if else)
    // Validate input and make sure at least one character type was selected (if, else)
    // Generate password based off of users selections, UNIQUE MATH <3
    // Return Password to box