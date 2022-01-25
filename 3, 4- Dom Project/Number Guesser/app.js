/*
GAME FUNCTION
 - Player must guess a number between a min and max
 -  Player gets a certain amount of guesses
 - Notify player of guesses remianing
 - Notify the player of the correct answer if loose
 - Let player choose to play again   
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements
const gameUI = document.querySelector('.game'),
      minNumUI = document.querySelector('.min-num'), // span to show min number
      maxNumUI = document.querySelector('.max-num'),
      guessBtnUI = document.querySelector('#guess-btn'),
      guessInputUI = document.querySelector('#guess-input'),
      messageUI = document.querySelector('.message');



// Assign min and max in UI
minNumUI.textContent = min;
maxNumUI.textContent = max;

// Play again event listener
gameUI.addEventListener('mousedown' , function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess
guessBtnUI.addEventListener('click', function(){
  let guessIntValue = parseInt(guessInputUI.value);
  
  //Validation, if not valid then
  if(isNaN(guessIntValue) || guessIntValue < min || guessIntValue > max){
    showMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if guessed number is right
  if(guessIntValue === winningNum){
    // Won
    gameOver(true,`${winningNum} is correct, YOU WON!`);
  }
  else {
    // Wrong number
    guessesLeft--;
    
    if(guessesLeft === 0){
      // Game over - Lost
      gameOver(false,`Game over, YOU LOST. The correct number was ${winningNum}.`);
    }
    else {
      // Game continuous - answer wrong

      //Notify user it's the wrong number
      showMessage(`${guessIntValue} is not correct, ${guessesLeft} guesses are left.`, 'red');
      guessInputUI.value = '';
      guessInputUI.focus(); 

      // Play again?
    }
  }

});

// Game Over 
function gameOver(won, msg){
  let color = won === true ? 'green' : 'red';

  // Disable input and 
  guessInputUI.disabled = true;
  guessInputUI.style.borderColor = color;
  
  showMessage(msg, color);

  // Play Again
  guessBtnUI.value = 'Play Again';
  guessBtnUI.className += 'play-again';
}

// Get Random Winning Number
function getRandomNum(min,max){
  return Math.floor(Math.random() * (max-min+1)+min);
}

// Show message
function showMessage(msg, color){
  messageUI.style.color = color; 
  messageUI.textContent = msg;
}