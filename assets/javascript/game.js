//theme is movies

let wordBank = ["avatar", "titanic", "avengers", "starwars", "jurassicpark", "lionking", "blackpanther", "frozen", "minions", "joker"]

let wins = 0;
let losses = 0; 
let guessLeft = 10; 
let chosenWord;
let hiddenWordArr = [];
let splitWordArr = []; 
let lettersGuessed =[];

function clear(){
    hiddenWord = "";
    lettersGuessed = [];
    unique = [];
    let guessLeft = 10; 
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("losses").innerText = "Losses: " + losses;
    document.getElementById("GuessesLeft").innerText = "Guesses Left: " + guessLeft;
}; 

document.getElementById("start").onclick = function() {
    clear();
    roll();
    playAgain();
};

function roll () {
    index = Math.floor(Math.random() * 10)
    chosenWord = wordBank[index];
    splitWordArr = [];
    hiddenWordArr = [];

    for (let i = 0; i < chosenWord.length; i++) {
        splitWordArr.push(chosenWord[i]);
    }
    joinWord = splitWordArr.join(" ");
    
    for (let j = 0; j < chosenWord.length; j++) {
        hiddenWordArr.push("_");
    }

    hiddenWord = hiddenWordArr.join(" ");

    document.getElementById("currentWord").innerHTML = hiddenWord;
}

document.addEventListener('keyup', check);


function check(e) {
    var x = event.keyCode;  
    var y = String.fromCharCode(x).toLowerCase();

        for (let k = 0; k < splitWordArr.length; k++) {
            if(y === splitWordArr[k]) {
                hiddenWordArr[k] = splitWordArr[k];
                hiddenWord = hiddenWordArr.join(" ");
                document.getElementById("currentWord").innerHTML = hiddenWord; 
                lettersGuessed.push(y);
            } else if (hiddenWordArr.indexOf("_") === -1) {
                alert("You Won!")
                clear();
                roll();
            }
        }
        if (lettersGuessed.indexOf(y) === -1){
            guessLeft -= 1;
            lettersGuessed.push(y);
            document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + guessLeft; 
                if (guessLeft <= 0) {
                    alert("You Lost!")
                    clear();
                    roll(); 
                } 
        }
    let unique = [...new Set(lettersGuessed)];

    document.getElementById("lettersGuessed").innerHTML = unique;
}


function playAgain() {
    document.getElementById("start").innerHTML = "Play Again!";
  }