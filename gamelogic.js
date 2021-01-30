function displayWordSoFar(word, guesses) {
  guesses = guesses.map(name => name.toLowerCase());
  word = word.toLowerCase();
  // Split the word into an array
  let correctWord = word.split('');
  // Create an empty string to later be filled
  let galgjeWoord = '';

  // Iterate over the letters
  for (let index = 0; index < correctWord.length ; index++) {
    const letterInWord = correctWord[index];
    // Check if the guessed letters are in the word
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      galgjeWoord = galgjeWoord + '_ ';
    }
    if (letterGuessed) {
      galgjeWoord = galgjeWoord + letterInWord + ' ';
    }
  }
  return galgjeWoord;
}

function isGameWon(word, guesses) {
  // isGameWon should return false when all letters have not been guessed yet
  const wordSoFar = displayWordSoFar(word, guesses);
  // Stich the letters together
  let stichWord = wordSoFar.replace(/\s/g,'');
  return stichWord === word;
}

function isGameLost(word, guesses) {
  const mistakeCount = countWrongGuesses(word, guesses);

  const MAX_MISTAKE_COUNT = 7;
  return mistakeCount >= MAX_MISTAKE_COUNT;
}

function countWrongGuesses (word, guesses) {
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    const isGuessCorrect = word.includes(guess);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1;
    }
  }
  return mistakeCount;
}


module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  countWrongGuesses: countWrongGuesses,
};
