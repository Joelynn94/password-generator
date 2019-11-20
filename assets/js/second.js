var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
var numericCharacters = '0123456789';
var specialCharacters = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';


function generate (number){
    var all = upperCharacters + lowerCharacters + numericCharacters + specialCharacters;

    var password = '';

    for (var index = 0; index < number; index++) {
        var character = Math.floor(Math.random() * all.length);
    }

    return password;
}

console.log(generate(5));


