const chalk = require("chalk");
const {keyIn} = require("readline-sync");
const {displayWordSoFar, isGameWon, isGameLost, countWrongGuesses} = require("./gamelogic");
const drawHangman = require("./drawHangman");

function game(word, guesses) {

    console.log(chalk.bgWhite("You have guessed these letters: ", guesses));
    console.log(displayWordSoFar(word, guesses));

    const letter = keyIn(chalk.green("Guess a letter: ", {
        limit: "abcdefghijklmnopqrstuvwxyz",
        caseSensitive: true,
    }));

    // This statement checks if the guessed letter has been guess before
    if (!guesses.includes(letter)) {
        guesses.push(letter);
    } else {
        console.log(chalk.red("You already guessed that letter! "));
    }

    const gameWon = isGameWon(word, guesses);
    if (gameWon) {
        console.log(chalk.bgGreen('Congratulations you have won!'));
        return;
    }

    const amountWrong = countWrongGuesses(word, guesses);
    console.log(chalk.yellow('You have made ', amountWrong, ' mistake(s)!'));
    drawHangman(amountWrong)

    const gameLost = isGameLost(word, guesses);
    if (gameLost) {
        console.log(chalk.redBright('Unfortunately you did not win...'));
        return
    }

    game(word, guesses);
}

console.log(chalk.bgWhite(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`));

game("javascript", []);
