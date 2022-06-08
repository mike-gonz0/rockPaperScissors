// this function is for the computer playing. It will return a random number from 0 < 3;
//the idea is to get options from index [0], up to Max number 3 but not including 3. 

function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);

    // now we will be adding an if else scenario that will return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
        if (randomNum === 0){
            return "rock";
            }
            else if (randomNum === 1){
                return "paper";
            }
            else {
                return "scissor";
            }
        }

// now we will create a player input function. 

function player(){
    let playerSelection = prompt("Rock, Paper, or Scissors?", "")
    let selectVal = playerSelection.toLowerCase();
    return selectVal
}

// Now we will create a function round() - taking 2 parameters and returning a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
function playRound(){
    // we start off by giving the parameters for who is playing. 
    let playerSelection = player();
    let computerSelection = computerPlay();
        console.log('Player Chose: ' + playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1));
        console.log('Computer Chose: '+ computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1));
        
    // we start of by affing a tie scenario, where if play and computer choose the same object the console will log a tie. 
    if (playerSelection === computerSelection){
        return ("It's a tie, Bummer!");
    // now we will create another scenario where the computer is the winner, and this will return the winner of the round like so: "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissor" || playerSelection === "scissor" && computerSelection === "rock"){
        return ("You LOSE! " + computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1) + "!");
    // finally we are adding a scenario where the player wins. 
    } else return (" You win!")
  }
  // from here we are goign to create a "game" where best 3 of 5 wins. 

  function game(){
      for (let i = 1; i<6; i++){
          console.log(playRound());
          console.log('round: ' + i);
      }
  }

  console.log(game());

  