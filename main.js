//Let Computer makes its choice

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Let's create the game motor

function playRound(playerSelection, computerSelection) {

   console.log('Player selected: ' + playerSelection);

    if (playerSelection === 'PAPER' & computerSelection==='PAPER') {

        return result = 'It is a draw';
        
    
    }
    else if (playerSelection === 'SCISSORS' & computerSelection ==='SCISSORS') {
    
        return result = 'It is a draw';
        
    
    }
    else if (playerSelection === 'ROCK' & computerSelection==='ROCK') {
    
        return result = 'It is a draw';
        
    
    }
    else if (playerSelection === 'PAPER' & computerSelection==='ROCK') {

        return result = 'You Won, Paper beats Rock';
        
    
    }
    else if (playerSelection === 'ROCK' & computerSelection==='PAPER') {

        return result= 'You Lost, Paper beats Rock';
        
    
    }
    else if (playerSelection === 'PAPER' & computerSelection==='SCISSORS') {
    
        return result = 'You lost, Scissors beats Paper';
        
    
    }
    else if (playerSelection === 'SCISSORS' & computerSelection==='PAPER') {
    
        return result = 'You Won, Scissors beats Paper';
        
    
    }
    else if (playerSelection === 'ROCK' & computerSelection==='SCISSORS') {
    
        return result = 'You Won, Rock beats Scissors';
        
    
    }
    else if (playerSelection === 'SCISSORS' & computerSelection==='ROCK') {
    
        return result = 'You Lost, Rock beats Scissors';
        
    
    }
    else {

        return result = 'Something went wrong!';
        
    }

}
// Let's launch the game for 5 times allowing user to make a decision

function game() {
    for (let i = 0; i < 5; i++) {


        let computerResponse = getComputerChoice(1, 3);

        if ( computerResponse == 1 ) {

            computerSelection = "Rock";

        }

        else if (computerResponse == 2) {

            computerSelection = "Paper"
        }

        else {

            computerSelection = "Scissors"
        }

        console.log('Computer selected: '+ computerSelection);

    
        playRound(prompt('').toUpperCase(), computerSelection.toUpperCase());
    
        console.log(result);
 }
}

game();



