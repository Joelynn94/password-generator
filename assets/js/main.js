// The user will be prompted to choose from the following password criteria
// Length (must be between 8 and 128 characters)
// Validate user input and ensure that at least one character type is selected.
// Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

// Create strings to pull from
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";

// Combined strings 
var combinedCharacters = lowerCharacters + upperCharacters + numericCharacters + specialCharacters;

// Generate random letters 
function randomLetter (list) {
    let letter = list[Math.floor(Math.random() * list.length)];
    return letter;
}

// Loop through array 
function generate (arr) {
    var password = " ";
    for(var i = 0; i < 7; i++) {
        password += randomLetter(arr);
    }
    console.log(password)
    return password;
}

// Grab reference to button ID
var target = document.getElementById('target');
// Grab reference to textarea ID 
var box = document.getElementById('passTextBox');

// Fire an on click event when the button is clicked and set the textContent to the generated password
target.onclick = function(){
    var pass = generate(combinedCharacters);
    box.textContent = pass;
}