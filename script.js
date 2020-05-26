

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

};

// Generate Questions
function writePassword(){
var passwordLength = prompt ("How many numbers do you want for your password? It must be between 8 - 128 characters.");
var upperCase = confirm("Do you want the uppercase?");
var lowerCase = confirm("Do you also want the lowercase?");
var number = confirm("Do you also want the number?");
var symbol = confirm("Do you also want the symbol?");

var minimumCount = 0;
var minimumUpperCase = "";
var minimumLowerCase = "";
var minimumNumber = "";
var minimumSymbol = "";

// Generator functions
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+65);
}
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+97);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+48);
}

function getRandomSymbol(){
    const symbol = '!@#$%^&*(){}=<>/,.';
    return symbol [Math.floor(Math.random() * symbol.length)];

};

if (upperCase === true) {
    minimumUpperCase = getRandomUpper();
    minimumCount++;
}

if (lowerCase === true) {
    minimumLowerCase = getRandomLower();
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

// empty string variable for the for loop below
var randomPasswordGenerated = "";

// loop getting random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
  var randomNumberPicked = Math.floor(Math.random() * 4);

  randomPasswordGenerated += randomNumberPicked;

}

// to make sure characters are added to the password
randomPasswordGenerated += minimumNumber;
randomPasswordGenerated += minimumLowerCase;
randomPasswordGenerated += minimumUpperCase;
randomPasswordGenerated += minimumSymbol;


return randomPasswordGenerated;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
