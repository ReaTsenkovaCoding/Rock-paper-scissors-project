let score = JSON.parse(localStorage.getItem('score')) || {

  wins: 0, 
  losses: 0,
  ties: 0
}; 

updateScoreElement();

if(localStorage.getItem('lastMoves')){ //restore moves on page load

  document.querySelector('.js-moves').innerHTML = localStorage.getItem('lastMoves');

}


let gameOver = false;
function playGame(playerMove){

  if(gameOver) {
    alert("Click 'Reset score' to play again!"); 
    return; 
  }

  const computerMove = pickComputerMove();
  let result = '';
  
  if(playerMove === 'scissors'){

    if(computerMove === 'rock') {
      result = 'You lose.';
    }
    else if(computerMove === 'paper'){
      result = 'You win!';
    }
    else if(computerMove === 'scissors'){
      result = 'Tie.';
    }
  }     

  else if(playerMove === 'paper'){

    if(computerMove === 'rock') {
    result = 'You win!';
    }
    else if(computerMove === 'paper'){
      result = 'Tie.';
    }
    else if(computerMove === 'scissors'){
      result = 'You lose.';
    }
  }

  else if(playerMove === 'rock'){

    if(computerMove === 'rock') result = 'Tie.';
    else if(computerMove === 'paper') result = 'You lose.';
    else if(computerMove === 'scissors') result = 'You win!';

  }

  if(result === 'You win!') score.wins ++;
  else if(result === 'You lose.') score.losses ++;
  else if(result === 'Tie.') score.ties ++;

  localStorage.setItem('score', JSON.stringify(score)); 
  updateScoreElement();
  
  document.querySelector('.js-result')
  .innerHTML = result

  document.querySelector('.js-moves').innerHTML = `You:<img src = "./assets/images/${playerMove}-emoji.png" class = "move-icon">
  <img src = "./assets/images/${computerMove}-emoji.png"
  class = "move-icon">
  :Bot`;

  localStorage.setItem('lastMoves', document.querySelector('.js-moves').innerHTML); //saving the moves in the storage


  // --- check if someone won the game ---
  if(score.wins === 5){
    gameOver = true;
    alert("CONGRATULATIONS! You defeated the bot!\nPlay again? Click reset score!");
  }
  else if (score.losses === 5){
    gameOver = true;
    alert("OH, NO!  You have been defeated by the bot.\nPlay again? Click reset score!");
  }
}

function updateScoreElement() {
  
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove() {
  const randomNumber = Math.random();        

  let computerMove = '';
  
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock';
  } 

  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper';
  }

  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors';
  }

  return computerMove;

}
// Copyright (c) 2025 Rea Tsenkova — All rights reserved.
// Unauthorized copying, modification, or redistribution is prohibited.
