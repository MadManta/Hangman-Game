console.log("hey girl chill out, you can do this ok?");

// List of words for game
var hangmanWords = ["apple", "persimmon", "apricot", "banana", "watermelon"];

// Randomly selected word from array
var word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

// Starting score
var score = 0;

// Starting try number
var tries = 5;

// Word translated into blanks to be solved
var underScore = [];
    for (j = 0; j < word.length; j++) {
        underScore[j] = "_" + " ";
    };

// HTML ID for blank word
document.getElementById("blankword").innerHTML = underScore.join(" ");


// User input gathered for a letter guess
document.onkeypress = function(event){
    var letterGuess = event.key;
    console.log(letterGuess);
    
    // Checks letters against word and updates underscores
        function wordUpdate() {   
            if (word.indexOf(letterGuess) !== -1) {
                for (var i = 0; i < underScore.length; i++) {
                if (letterGuess === word[i]) {
                underScore[i] = letterGuess;
                document.getElementById("blankword").innerHTML = underScore.join(" ");
                    }
                }
            } 
            
            // This is if the guess is wrong
            else {
                    document.getElementById("tryagain").innerHTML = "Tries left: " + tries;
                    console.log("That letter is not correct");
                    tries--;
                    }
        };
    

    wordUpdate();
    youLose();
    youWin();
};

// This will occur if you guessed the word!
function youWin() {
    if (underScore.join("") == word) {
        console.log("You win!");
        document.getElementById("winlose").innerHTML = "You win!";
        scoreUpdate();
        // loadWord();
        }
    };

// This will update the score on the HTML

function scoreUpdate() {
    score++
    document.getElementById("score").innerHTML = "SCORE: " + score;
};

// This will bring a new word up on the screen
function loadWord() {
            document.getElementById("blankword").reset();
};

// This will let you know you lose and load a new word.
function youLose() {
    if (tries < 0) {
        console.log("You lose!")
        document.getElementById("winlose").innerHTML = "You lose!"
        // loadWord();
    }
};

