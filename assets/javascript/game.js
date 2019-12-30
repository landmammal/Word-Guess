//theme is movies

let wordBank = ["avatar", "titanic", "avengers", "starwars", "jurassicpark", "lionking", "blackpanther", "frozen", "minions", "joker"]

let wins = 0;
let losses = 0; 
let chosenWord;

function roll () {
    index = Math.floor(Math.random() * 10)
    chosenWord = wordBank[index];

    for (let i = 0; i <= wordBank.length; i++) {

    }
}

roll();

console.log(chosenWord);


