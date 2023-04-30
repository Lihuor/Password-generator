// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Questions
function generatePassword() {
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("How many characters do you want in your password? (between 8 and 128)");
}

  var upperCase = confirm("Do you want the uppercase?");
  var lowerCase = confirm("Do you want the lowercase?");
  var number = confirm("Do you want the number?");
  var symbol = confirm("Do you want the symbol?");

  var minimumCount = 0;
  var minimumUpperCase = "";
  var minimumLowerCase = "";
  var minimumNumber = "";
  var minimumSymbol = '';

  // Generate Function
  function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomSymbol() {
    const symbol = "!@#$%^&*(){}[]"
    return symbol[Math.floor(Math.random() * symbol.length)];
  };

  // Let give conditions
  if (upperCase === true) {
    minimumUpperCase = getRandomUpperCase();
    minimumCount++;
  }

  if (lowerCase === true) {
    minimumLowerCase = getRandomLowerCase();
    minimumCount++;
  }
  if (number === true) {
    minimumNumber = getRandomNumber();
    minimumCount++;
  }
  if (symbol === true) {
    minimumSymbol = getRandomSymbol();
    minimumCount++;
  }

  // empty string variable for the loop below
  var randomPasswordGenerated = "";

  // Loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomPasswordPicked = Math.floor(Math.random() * passwordLength);
    randomPasswordGenerated += randomPasswordPicked;
  }

  // character will be added to the password
  randomPasswordGenerated += minimumNumber;
  randomPasswordGenerated += minimumLowerCase;
  randomPasswordGenerated += minimumUpperCase;
  randomPasswordGenerated += minimumSymbol;

  return randomPasswordGenerated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
