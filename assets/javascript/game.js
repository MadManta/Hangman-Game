console.log("hey girl chill out, you can do this ok?");

console.log(event)


// List of words for game
var hangmanWords = ["apple", "persimmon", "apricot", "banana", "watermelon"];

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

// Remaining letters
var remainingLetters = word.length;


// HTML ID for blank word
document.getElementById("wordlist").innerHTML = underScore.join(" ");

// User input gathered for a letter guess
document.onkeypress = function(event){
    var letterGuess = String.fromCharCode(event.which).toLowerCase();
    console.log(letterGuess);
    // Check letterGuess (event) against each letter in random word
    for (var x = 0; x < word.length; x++){  
        if (word[x] === letterGuess) {
            console.log("Reached here");
            remainingLetters--;
            wordUpdate();
            hasLettersRemaining();
            youWin();
        }
        //debug: how to only run if "if" is false
        else {
            console.log("You have " + tries + " tries left")
            hasLettersRemaining();
            tries--;
        }
    }
};

// This will bring a new word up on the screen
function loadWord() {

};

// This will update the underscores into letters
function wordUpdate() {

};

// This will check if there are letters remaining
function hasLettersRemaining() {
    if (remainingLetters > 0) {
        return;
    }
};

// This will let you know you win, update the score, and load a new word.
function youWin() {
    if (remainingLetters < 1) {
        console.log("You win!")
        score++
        // loadWord();
    }
};

// This will let you know you lose and load a new word.
function youLose() {
    if (tries < 1) {
        console.log("You lose!")
        // loadWord();
    }
};