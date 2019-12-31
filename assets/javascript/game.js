//theme is movies

let wordBank = ["avatar", "titanic", "avengers", "starwars", "jurassicpark", "lionking", "blackpanther", "frozen", "minions", "joker"]

let wins = 0;
let losses = 0; 
let guessLeft = 0; 
let chosenWord;
let spacedWord = ""; 
let hiddenWord = "";

function clear(){
    hiddenWord = "";
    document.getElementById("currentWord").innerText = hiddenWord;
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("losses").innerText = "Losses: " + losses;
    document.getElementById("GuessesLeft").innerText = "Guesses Left: " + guessLeft;
}; 

document.getElementById("start").onclick = function() {
    clear();
    roll();
};

function roll () {
    index = Math.floor(Math.random() * 10)
    chosenWord = wordBank[index];

    for (let i = 0; i < chosenWord.length; i++) {
        hiddenWord += "_ ";
        document.getElementById("currentWord").innerHTML = hiddenWord;
    }
    for (let j = 0; j <= chosenWord.length-1; j++) {
        spacedWord += chosenWord.charAt(j) + " ";
    }
    
console.log(chosenWord);
console.log(spacedWord);
}




