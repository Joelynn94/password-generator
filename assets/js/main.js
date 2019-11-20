// The user will be prompted to choose from the following password criteria
// Length (must be between 8 and 128 characters)
// Validate user input and ensure that at least one character type is selected.
// Once all prompts are answered, the user will be presented with a password matching the answered prompts. Displaying the generated password in an alert is acceptable, but attempt to write the password to the page instead.

// Create arrays to pull from
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";


// Generate random letters 
function randomLetter (list) {
    let letter = list[Math.floor(Math.random() * list.length)];
    return letter;
}


// Loop through array 
function generate (arr) {
    var password = "";
    for(var i = 0; i < 7; i++) {
        password += randomLetter(arr);
    }
    console.log(password)
}

generate(lowerCharacters);
generate(upperCharacters);
generate(numericCharacters);
generate(specialCharacters);