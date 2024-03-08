console.log('hi');

const getUserChoice = userInput => {
   userInput = userInput.toLowerCase();
   if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
     return userInput;
   }
   else if(userInput === 'bomb'){
     return 'bomb';
   }
   else {
     console.log('Error!')
   }
}

function getComputerChoice (){
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
  }
}

function determineWinner(userChoice , computerChoice){
  if(userChoice === 'bomb'){
    return 'User Won!!';

  }
  if(userChoice === computerChoice){
    return 'The game is a tie!';
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Won!';
    }
    else {
      return 'User Won!';
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer Won!';

    }else {
      return 'User Won!';
    }

  }else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer Won!';
    }else {
      return 'User Won';
    }

  }

}

function playGame(){
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();