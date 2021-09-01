// get elements and set in variable
const rockIcon = document.getElementById('rock-butt');
const paperIcon = document.getElementById('paper-butt');
const scissorsIcon = document.getElementById('scissors-butt');

// decrease size of icon when hovering over it
rockIcon.addEventListener('mouseover', function(e){
  document.querySelector('#rock-butt').className = "far fa-hand-rock fa-lg";
})
rockIcon.addEventListener('mouseout', function(e) {
  document.querySelector('#rock-butt').className = "far fa-hand-rock fa-2x";
})


paperIcon.addEventListener('mouseover', function(e){
  document.querySelector('#paper-butt').className = "far fa-hand-paper fa-lg";
})
paperIcon.addEventListener('mouseout', function(e){
  document.querySelector('#paper-butt').className = "far fa-hand-paper fa-2x"; 
})

scissorsIcon.addEventListener('mouseover', function(e){
  document.querySelector('#scissors-butt').className = "far fa-hand-scissors fa-lg";
})
scissorsIcon.addEventListener('mouseout', function(e){
  document.querySelector('#scissors-butt').className = "far fa-hand-scissors fa-2x";
})

// reset game results
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(e){
  document.querySelector('.result').innerText = '';
  document.querySelector('.computer').style.borderColor = '';
})

// object for computer
const computer = {
  choice: null
}

// object for player
const player = {
  choice: null
}


// if button with id rock-butt is click
rockIcon.addEventListener('click', function(e){
  player.choice = choiceOptions[0];
  play();
})

paperIcon.addEventListener('click', function(e){
  player.choice = choiceOptions[1];
  play();
})

scissorsIcon.addEventListener('click', function(e){
  player.choice = choiceOptions[2];
  play();
})



// array for choices
let choiceOptions = ['rock', 'paper', 'scissors'];


// function for computers choice
function computerChoice(){
  // randomizer
  let randomPick = Math.floor(Math.random() * choiceOptions.length);
  // return computers random pick
  return computer.choice = choiceOptions[randomPick];
}

// function to compare computers to players choice
function compareChoices(){
  // call computer choice function to update global veriable
  computerChoice();
  // // prompt user for choice
  // let promptUser = prompt("rock, paper, or scissors?");
  // // set prompt user to player choice
  // player.choice = promptUser;
  

  
  // if players choice and computer choice match
  if (player.choice === computer.choice){
    // alert tie
    document.querySelector('.result').innerText = 'Tie!';
    document.querySelector('.computer').style.borderColor = 'grey';
  // if player choice equals rock
  } else if (player.choice === choiceOptions[0]){
    // if computer choice equals paper
    if (computer.choice === choiceOptions[1]){
      // alert computer wins
      document.querySelector('.result').innerText = `You lose! ${computer.choice} beats ${player.choice}`;
      document.querySelector('.computer').style.borderColor = 'red';
    // else
    } else {
      // alert player wins
      document.querySelector('.result').innerText = `You win! ${player.choice} beats ${computer.choice}`;
      document.querySelector('.computer').style.borderColor = '#30cf47';
    }
  // if player choice equals paper    
  } else if (player.choice === choiceOptions[1]){
    // if computer choice equals scissors
    if (computer.choice === choiceOptions[2]){
      // alert computer wins
      document.querySelector('.result').innerText = `You lose! ${computer.choice} beats ${player.choice}`;
      document.querySelector('.computer').style.borderColor = 'red';
    // else
    } else {
      // alert player wins
      document.querySelector('.result').innerText = `You win! ${player.choice} beats ${computer.choice}`;
      document.querySelector('.computer').style.borderColor = '#30cf47';
    }
  // if player choice equals scissors
  } else if (player.choice === choiceOptions[2]){
    // if computer choice equals rock
    if (computer.choice === choiceOptions[0]){
      // alert computer wins
      document.querySelector('.result').innerText = `You lose! ${computer.choice} beats ${player.choice}`;
      document.querySelector('.computer').style.borderColor = 'red';
    // else
    } else {
      // alert player wins
      document.querySelector('.result').innerText = `You win! ${player.choice} beats ${computer.choice}`;
      document.querySelector('.computer').style.borderColor = '#30cf47';
    }
  } 
}

// function to play
function play(){
  // call comparison function
  compareChoices();
}