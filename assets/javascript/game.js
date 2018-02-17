// Starting score
var score = 0;

function runGame() {
    // List of words for game
    var hangmanWords = ["apple", "persimmon", "apricot", "banana", "watermelon", "lychee", "dragonfruit", "kumquat", "tomato", "nectarine", "orange", "grape", "pineapple", "avocado", "durian"];

    // Randomly selected word from array
    var word = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

    var playAgain;

    // Starting try number
    var tries = 5;

    // Word translated into blanks to be solved
    var underScore = [];
    for (j = 0; j < word.length; j++) {
        underScore[j] = "_" + " ";
    };

    // Console Check
    console.log('word--->', word)
    console.log('tries--->', tries)


    // HTML ID for blank word
    document.getElementById("blankword").innerHTML = underScore.join(" ");

    // HTML for resetting tries
    document.getElementById("tries").innerHTML = "Tries left: " + tries;

    // User input gathered for a letter guess
    document.onkeypress = function (event) {
        var letterGuess = event.key;
        console.log(letterGuess);

        // Checks letters against word and updates underscores

        if (word.indexOf(letterGuess) !== -1) {
            for (var i = 0; i < underScore.length; i++) {
                if (letterGuess === word[i]) {
                    underScore[i] = letterGuess;
                    console.log("underscore--->", underScore);
                    document.getElementById("blankword").innerHTML = underScore.join(" ");
                    youWin(underScore, word);
                }
            }
        }

        // This is if the guess is wrong
        else {
            document.getElementById("tries").innerHTML = "Tries left: " + tries;
            console.log("That letter is not correct");
            tries--;
            youLose(tries);
        }

    };

    // This will occur if you guessed the word!
    function youWin(underScore, word) {
        if (underScore.join("") == word) {
            console.log("You win!");
            document.getElementById("winlose").innerHTML = "You win!";
            scoreUpdate();
            playAgain = confirm("You win! play again?")
            if (playAgain) {
                runGame();
            }
        }
    }

        // This will update the score on the HTML

        function scoreUpdate() {
            score++
            document.getElementById("score").innerHTML = "SCORE: " + score;
        };

        // This will bring a new word up on the screen


        // This will let you know you lose and load a new word.
        function youLose(tries) {
            if (tries === 0) {
                console.log("You lose!")
                document.getElementById("winlose").innerHTML = "You lose!";
                playAgain = confirm("You lose! play again?")
                if (playAgain) {
                    document.getElementById("winlose").innerHTML = "";
                    runGame();
                }
            }
        };

}
runGame();
