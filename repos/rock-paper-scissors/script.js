

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    let random_index = Math.floor(Math.random()*3);
    console.log(choices[random_index]);
    return choices[random_index];
}

function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const choices = ['rock', 'paper', 'scissor']

    if (~(playerSelection in choices)){
        return `Enter Again`
    }
    else if (playerSelection === computerSelection){
        return `It's a draw!`
    }
    else if (playerSelection === "rock" && computerSelection === "scissor"){
        return `You Win! Rock beats Scissor`
    }
    else if (playerSelection === 'paper' && computerSelection == 'rock'){
        return `You Win! Paper beats Rock`
    }
    else if (playerSelection === "scissor" && computerSelection === "paper"){
        return `You Win! Scissor beats Paper` 
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


function game(){
    let playerScore;
    let computerScore;

    for(let round = 0; round<=4; round++){
        let playerChoice = prompt("Enter your choice");
        let computerChoice = getComputerChoice();
        if (playerChoice.startsWith("Enter")){
            round--;
            continue;
        }
        let res = play(playerChoice, computerChoice);
        if (res.startsWith('You Win!')){
            playerScore++;
        }
        else if (res.startsWith('You Lose!')){
            computerScore++;
        }
    }

    if (playerScore > computerScore){
        return `You are the Winner!`
    }
    else {
        return 'Better luck Next Time!'
    }

}





console.log(game());