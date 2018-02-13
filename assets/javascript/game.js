console.log("hey girl chill out, you can do this ok?");

// List of words for game
var hangmanWords = ["apple", "orange", "grape", "banana", "watermelon"];

// Randomly selected word from array
var word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

// Starting score
var score = 0;

// Starting try number
var tries = 10;

// Word translated into blanks to be solved
var underScore = [];
    for (i = 0; i < word.length; i++) {
        underScore[i] = "_" + " ";
    };

// HTML ID for blank word
document.getElementById("wordlist").innerHTML = underScore.join(" ");





 