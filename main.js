
// import swal from 'sweetalert';
const bod = document.querySelector('body');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const replay = document.querySelector('.replay');
const content = document.querySelector('.content');
const divpscore = document.createElement('div');
const divcscore = document.createElement('div');
divpscore.classList.add('playerscore');
divcscore.classList.add('computerscore');
divpscore.textContent='Player Score: 0';
divcscore.textContent='Computer Score: 0';
div2.appendChild(divpscore);
div2.appendChild(divcscore);
replay.textContent='Play Again';
let para = '';
content.textContent="Let's Play a Round!";

let count = 1;
let keystr = '';
const gameArray = ['ROCK','PAPER','SCISSOR'];
let playerSelection='';
let computerSelectiontext ='';
let playerSelectiontext = '';
let playerWinCount=0;
let computerWinCount=0;

// Game buttons creation

for (let i=0; i<3; i++) {

    keystr += 'button' + String(count);
    const gameButton = document.createElement('button');
    gameButton.classList.add(count);
    gameButton.textContent=gameArray[i];
    div1.appendChild(gameButton);
    keystr = '';
    count++;
};

// Listen the game buttons and trigger game function

const allButton = document.querySelectorAll('button');

allButton.forEach(buton => buton.addEventListener('click', (e)=>  {

    if (e.target.textContent == 'ROCK') 

    {playerSelection = 'ROCK';
    gamewui(playerSelection);}

    else if (e.target.textContent == 'PAPER') 

    {playerSelection = 'PAPER';
    gamewui(playerSelection);}

    else if (e.target.textContent == 'SCISSOR')

    {playerSelection = 'SCISSOR';
    gamewui(playerSelection);}
    
    else;
} 
)
);


// Let Computer makes its choice

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Let's create the game motor

function playRound(playerSelection, computerSelection) {

   playerSelectiontext= 'Player selected: ' + playerSelection;

    if (playerSelection === 'PAPER' & computerSelection==='PAPER') {
         
        result = 'It is a draw';
        content.textContent = result;
    }
    else if (playerSelection === 'SCISSOR' & computerSelection ==='SCISSOR') {
    
         result = 'It is a draw';
         content.textContent = result;
    }
    else if (playerSelection === 'ROCK' & computerSelection==='ROCK') {
    
         result = 'It is a draw';
         content.textContent = result;
    
    }
    else if (playerSelection === 'PAPER' & computerSelection==='ROCK') {
        playerWinCount ++;
        divpscore.textContent = 'Player Score: ' + playerWinCount;
        if (playerWinCount == 5) {
            const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'Congrats! You won!',
  text: "Want to play again?",
  icon: 'success',
  iconColor: 'white',
  background: 'black',
confirmButtonColor: 'green',
  showCancelButton: true,
  confirmButtonText: 'Yes, play again!',
  cancelButtonText: 'No! Game over!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

  } else  
  {
    const divall = document.querySelectorAll('div');
    divall.forEach(div => {div.innerHTML='';});
        bod.style.backgroundImage='URL("bg.png")';
    bod.style.backgroundSize='cover';
    bod.style.backgroundRepeat='no-repeat';

  }
})
        }
        else {
            result = 'You Won! \n PAPER beats ROCK';
            content.textContent = result;
    }
        
    
    }
    else if (playerSelection === 'ROCK' & computerSelection==='PAPER') {

        computerWinCount++;
        divcscore.textContent = 'Computer Score: ' + computerWinCount;
        if (computerWinCount == 5) {
            const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'OOPS! You lost!',
  text: "Want to try again?",
  icon: 'warning',
    iconColor: 'white',
  background: 'black',
confirmButtonColor: 'green',
  confirmButtonColor: 'green',
  showCancelButton: true,
  confirmButtonText: 'Yes, play again!',
  cancelButtonText: 'No! Game over!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

  } else  
  {
    const divall = document.querySelectorAll('div');
    divall.forEach(div => {div.innerHTML='';});
        bod.style.backgroundImage='URL("bg.png")';
    bod.style.backgroundSize='cover';
    bod.style.backgroundRepeat='no-repeat';

  }
})
        }
        else {
         result= 'You Lost! \n PAPER beats ROCK';
         content.textContent = result;
        }
    }
    else if (playerSelection === 'PAPER' & computerSelection==='SCISSOR') {
    
        computerWinCount++;
        divcscore.textContent= 'Computer Score: ' + computerWinCount;
        if (computerWinCount == 5) {
            const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'OOPS! You lost!',
  text: "Want to try again?",
  icon: 'warning',
    iconColor: 'white',
  background: 'black',
confirmButtonColor: 'green',
  showCancelButton: true,
  confirmButtonText: 'Yes, play again!',
  cancelButtonText: 'No! Game over!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

  } else  
  {
    const divall = document.querySelectorAll('div');
    divall.forEach(div => {div.innerHTML='';});
        bod.style.backgroundImage='URL("bg.png")';
    bod.style.backgroundSize='cover';
    bod.style.backgroundRepeat='no-repeat';

  }
})
        }
        else {
         result = 'You Lost! \n, SCISSOR beats PAPER';
         content.textContent = result;
        }
    }
    else if (playerSelection === 'SCISSOR' & computerSelection==='PAPER') {

        playerWinCount ++;
        divpscore.textContent= 'Player Score: ' + playerWinCount;
        if (playerWinCount == 5) {
            const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'Congrats! You won!',
  text: "Want to play again?",
  icon: 'success',
  showCancelButton: true,
  confirmButtonText: 'Yes, play again!',
  cancelButtonText: 'No! Game over!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

  } else  
  {
    const divall = document.querySelectorAll('div');
    divall.forEach(div => {div.innerHTML='';});
        bod.style.backgroundImage='URL("bg.png")';
    bod.style.backgroundSize='cover';
    bod.style.backgroundRepeat='no-repeat';

  }
})
        }
        else {
         result = 'You Won! \n SCISSOR beats PAPER';
         content.textContent = result;
        }
    }
    else if (playerSelection === 'ROCK' & computerSelection==='SCISSOR') {

        playerWinCount ++;
        divpscore.textContent= 'Player Score: ' + playerWinCount; 
        if (playerWinCount == 5) {
            const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'Congrats! You won!',
  text: "Want to play again?",
  icon: 'success',
    iconColor: 'white',
  background: 'black',
confirmButtonColor: 'green',
  showCancelButton: true,
  confirmButtonText: 'Yes, play again!',
  cancelButtonText: 'No! Game over!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

  } else  
  {
    const divall = document.querySelectorAll('div');
    divall.forEach(div => {div.innerHTML='';});
        bod.style.backgroundImage='URL("bg.png")';
    bod.style.backgroundSize='cover';
    bod.style.backgroundRepeat='no-repeat';

  }
})
        }
        else {
         result = 'You Won! \n ROCK beats SCISSOR';
         content.textContent = result;
        }
    }
    else if (playerSelection === 'SCISSOR' & computerSelection==='ROCK') {

        computerWinCount++;
        divcscore.textContent= 'Computer Score: ' + computerWinCount;
        if (computerWinCount == 5) {
            const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: true
})

swalWithBootstrapButtons.fire({
  title: 'OOPS! You lost!',
  text: "Want to try again?",
  icon: 'warning',
  iconColor: 'white',
  background: 'black',
confirmButtonColor: 'green',
  showCancelButton: true,
  confirmButtonText: 'Yes, play again!',
  cancelButtonText: 'No! Game over!',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

  } else  
  {
    const divall = document.querySelectorAll('div');
    divall.forEach(div => {div.innerHTML='';});
        bod.style.backgroundImage='URL("bg.png")';
    bod.style.backgroundSize='cover';
    bod.style.backgroundRepeat='no-repeat';
    

  }
})
        }
        else {
         result = 'You Lost! \n, ROCK beats SCISSOR';
         content.textContent = result;
        }
    }
    else {
         result = 'Something went wrong!';
         content.textContent = result;
    }
};

function gamewui() {

let computerResponse = getComputerChoice(1, 3);

if ( computerResponse == 1 ) {

    computerSelection = "ROCK";

}

else if (computerResponse == 2) {

    computerSelection = "PAPER";
}

else {

    computerSelection = "SCISSOR";
}

computerSelectiontext = 'Computer selected: '+ computerSelection;


playRound(playerSelection, computerSelection.toUpperCase());


// para.textContent += computerSelectiontext;
// para.textContent +=  '\n'
// para.textContent += playerSelectiontext+ '\n';


};

    
    replay.addEventListener('click', () => {

    content.textContent = "Let's Play a Round!";
       
    playerWinCount=0;
        
    computerWinCount=0;
        
    divpscore.textContent= 'Player Score: ' + playerWinCount;
       
    divcscore.textContent= 'Computer Score: ' + computerWinCount;

    }
    )
     ;


// Let's launch the game for 5 times allowing user to make a decision

// function game() {
//     for (let i = 0; i < 5; i++) {


//         let computerResponse = getComputerChoice(1, 3);

//         if ( computerResponse == 1 ) {

//             computerSelection = "Rock";

//         }

//         else if (computerResponse == 2) {

//             computerSelection = "Paper"
//         }

//         else {

//             computerSelection = "SCISSOR"
//         }

//         console.log('Computer selected: '+ computerSelection);

    
//         playRound(prompt('').toUpperCase(), computerSelection.toUpperCase());
    
//         console.log(result);
//  }
// }

// game();



