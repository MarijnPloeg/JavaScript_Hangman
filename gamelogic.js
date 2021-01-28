function displayWordSoFar(word, guesses) {
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
  // isGameLost should return true if you've guessed 7 wrong letters or more
  let amountOfGuesses = guesses.length;
  return amountOfGuesses >= 7;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
