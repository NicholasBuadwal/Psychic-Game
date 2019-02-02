var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessChoices = [];

   document.onkeypress = function (event) {
        console.log(randomValue)


        var userGuess = event.key;
        var randomValue = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (userGuess === randomValue) {
                wins++;
                guesses = 9;
                guessChoices = [];
        } else {
                guesses--;
                guessChoices.push(userGuess);
        }
        if (guesses === 0) {
                losses++;
                guesses = 9;
                guessChoices = [];
        }

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "Losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
        document.getElementById('guessChoices').innerHTML = "Letters Guessed: " + guessChoices;
        document.querySelector("#game").innerHTML = html;
}