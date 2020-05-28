// // The user will be prompted to choose from the following password criteria
// // Length (must be between 8 and 128 characters)
// // Validate user input and ensure that at least one character type is selected.
// // Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

// Create strings to pull from
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";

// Combined strings
var combinedCharacters = [];

const slider = document.getElementById("range-slider");
const sliderNumber = document.getElementById("range-number");
const optionsForm = document.getElementById("options-form");

// event listener for the options form
optionsForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

// event listener on the range slider
slider.addEventListener("input", () => {
  // change the value of the number value by the slider value
  sliderNumber.value = slider.value;
});

// event listener on the number value
sliderNumber.addEventListener("input", () => {
  console.log(`Slider value is: ${slider.value}`);
  console.log(`Number value is: ${sliderNumber.value}`);
  // change the value of the slider value by the number value
  slider.value = sliderNumber.value;
});

// Create user-slected criteria
// var userInput = parseInt(
//   prompt("How many characters would you like your password to contain?")
// );

// // confirm boxes
// var lowercase = confirm('Click OK to confirm using lowercase characters');
// var uppercase = confirm('Click OK to confirm using uppercase characters');
// var numbers = confirm('Click OK to confirm using numbers');
// var special = confirm('Click OK to confirm using special characters');

function userLength() {
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(userInput) === true) {
    alert("Password length must be provided as a number");
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (userInput < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (userInput > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  if (lowercase) {
    combinedCharacters += lowerCharacters;
  }
  if (uppercase) {
    combinedCharacters += upperCharacters;
  }
  if (numbers) {
    combinedCharacters += numericCharacters;
  }
  if (special) {
    combinedCharacters += specialCharacters;
  }

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (
    lowerCharacters === false &&
    upperCharacters === false &&
    numericCharacters === false &&
    specialCharacters === false
  ) {
    alert("Must select at least one character type");
    return;
  }
}

// Generate random letters from array
function randomLetter(arr) {
  let letter = arr[Math.floor(Math.random() * arr.length)];
  return letter;
}

// Loop through array
function generate(arr) {
  userLength();
  var password = " ";
  for (var i = 0; i < userInput; i++) {
    password += randomLetter(arr);
  }
  return password;
}

// Grab reference to textarea ID
var box = document.getElementById("passTextBox");

// Fire an on click event when the button is clicked and set the textContent to the generated password
generateBtn.onclick = function () {
  var pass = generate(combinedCharacters);
  box.textContent = pass;
};

// Copy to clipboard event
document.querySelector("#copyBtn").addEventListener("click", function () {
  document.querySelector("#passTextBox").select();
  document.execCommand("copy");
});

// started with declaring arrays to pull information from
// build the function to prompt user for input
// prompt
