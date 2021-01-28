const chalk =  require("chalk");
const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");
let counter = 0;
function game(word, guesses) {

  console.log("You have guessed these letters: ", guesses);
  console.log(displayWordSoFar(word, guesses));

  const letter = question("Raad een letter: ");

  if (isCharacterALetter(letter) && letter.length === 1) {
    // Check if the game is won or lost
    if (isGameWon(word, guesses)) {
      console.log(chalk.bgGreen('Congratulations, you have won'));
    }
    else if (isGameLost(word, guesses)) {
      console.log(chalk.bgRed('You lost the game!'));
    }
    // volgende ronde! we roepen game nog een keer aan
    else {
      // Bijhouden of iets fout ingevoer is, werkt nog niet voor hoofdletters...
      if (word.includes(letter.toString()) === false) {
        counter++;
      }
      guesses.push(letter);
      console.log('Amount of wrong guesses: ', counter);
      game(word, guesses);
    }
  }
  else  {
    console.log(chalk.bgRed('Please make sure you enter a single letter! '));
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

game("JavaScript", []);

function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}