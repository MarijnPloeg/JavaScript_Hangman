const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  console.log(displayWordSoFar(word, guesses));

  const letter = question("Raad een letter: ");

  if (isCharacterALetter(letter) && letter.length === 1) {
    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter);

    // Check if the game is won or lost
    if (isGameWon(word, guesses)) {
      console.log('Congratulations, you have won')
    }
    else if (isGameLost(word, guesses)) {
      console.log('You lost the game!')
    }
    // volgende ronde! we roepen game nog een keer aan
    else {
      game(word, guesses);
    }
  }
  else  {
    console.log('Please make sure you enter a single letter! ')
    game(word, guesses)
  }


}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);

function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}