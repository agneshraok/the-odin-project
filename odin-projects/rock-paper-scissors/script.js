//DOM elements
const parent = document.querySelector('body');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

const statBlock = document.querySelector('#stats-block');
const playerStatBlock = document.querySelector('#stats-block>.player');
const computerStatBlock = document.querySelector('#stats-block>.computer');
const playerSVG = document.querySelector('.player>.vector');
const computerSVG = document.querySelector('.computer>.vector');
const playerScoreDisplay = document.querySelector('.stats>.player');
const computerScoreDisplay = document.querySelector('.stats>.computer');

const choiceContainer = document.querySelector('#choices');
const rockHtml = '<img id="rock"  style="color: black; width:110px; height:110px;" src="svg/rock1.svg"  alt="rock">'
const paperHtml = '<img id="paper" style="color: black; width:110px; height:110px;" src="svg/paper1.svg"  alt="scissor">'
const scissorHtml = '<img id="scissor" style="color: black; width:110px; height:110px;" src="svg/scissor1.svg"  alt="scissor">'


//Creating post result elements
const resContainer = document.createElement('div');
resContainer.setAttribute('id', 'res-container');
resContainer.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center;');

//result div
const res = document.createElement('div');
res.setAttribute('id', 'res');
res.setAttribute("style"," color: greenyellow; padding: 50px; font-size: 40px; font-family: 'Roboto Mono', monospace; font-weight: 1000;");

//play again btn
const playAgain = document.createElement('button');
playAgain.setAttribute('id', 'play-again');
playAgain.textContent = 'Play Again?'
playAgain.setAttribute('style', "padding: 20px; font-size: 20px; font-weight: 500; font-family: 'Roboto Mono', monospace; margin-bottom: 50px;")


//Game Logic

let round = 0;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];

    for (let i = choices.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = choices[i];
    choices[i] = choices[j];
    choices[j] = k;
    }

    let res = choices[0];

    //display outcome
    if (res === 'rock'){
        computerSVG.innerHTML = rockHtml;
    }
    else if (res === 'paper'){
        computerSVG.innerHTML = paperHtml;
    }else{
        computerSVG.innerHTML = scissorHtml;
    }

    return res
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    // A single round.
    if (playerSelection === computerSelection){
        console.log("Draw") ;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissor'){
        playerScore+=1;
        console.log("You Win, rock beats scissor");
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper'){
        playerScore+=1;
        console.log("You Win, scissor beats paper ");
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore+=1;
        console.log("You Win, paper beats rock");
    }
    else{
        computerScore+=1;
        console.log(`You Loose, ${computerSelection} beats ${playerSelection}.`);
    }
  }


function isFinished(){
    if (playerScore === 5){
        console.log('Game Finsihed');
        displayResult(`You Won, Congradulations!`);
    }
    else if(computerScore === 5){
        console.log('Game Finsihed');
        displayResult(`You Lost, Better Luck next time`);
    }
    else{
        console.log('Game Not Finished');
    }
}

function displayResult(outcome){
    parent.removeChild(statBlock);
    parent.removeChild(choiceContainer);
    parent.appendChild(resContainer);
    resContainer.appendChild(res);
    resContainer.appendChild(playAgain);
    res.textContent = outcome;
    
}

function resetGame(){
    round = 0;
    playerScore =0;
    computerScore =0;
    parent.removeChild(resContainer);
    parent.append(statBlock);
    parent.append(choiceContainer);
    updateScore();
}

function updateScore(){
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}


//Event Listners
rock.addEventListener('click', ()=>{
    playRound('rock');
    playerSVG.innerHTML = rockHtml;
    updateScore();
    isFinished();
})

paper.addEventListener('click', ()=>{
    playRound('paper');
    playerSVG.innerHTML = paperHtml;
    updateScore();
    isFinished();
})

scissor.addEventListener('click', ()=>{
    playRound('scissor');
    playerSVG.innerHTML = scissorHtml;
    updateScore();
    isFinished();
})

playAgain.addEventListener('click',()=>resetGame());


/* 
TODO:
1. Find Better SVGs
2. Add a huge SVG before game starts
3. End game functionality (show result and play again btn)
4. the text is moving
5. make the btns tacktile (animation and sound)

*/