//console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){

    const randnum = Math.random();
    let string = "";

    //console.log(randnum);

    if (randnum > 0.666) {
        string = "ROCK";
    } else if (randnum >= 0.333 && randnum < 0.666) {
        string = "PAPER";
    } else {
        string = "SCISSORS";
    }

    //console.log("Computer choice:" + string);

    return string;
}



function getHumanChoice(){

   
    
    let input = prompt("Enter your choice");

    console.log("Player entered: " + input);
   
    return input;
    
}


//console.log(getComputerChoice());
//console.log("Player choice: " + getHumanChoice());


function playRound(humanChoice, computerChoice){

    let playerchoice = humanChoice.toUpperCase();
    let winner = "no winner";

    console.log("Player choice:" + playerchoice)
    console.log("Computer choice:" + computerChoice)

    if(computerChoice == "ROCK"){

        if(playerchoice == "PAPER"){
            console.log("You win!  Paper beats rock.");
            winner = "human";
        }else if(playerchoice == "SCISSORS"){
            console.log("You lose!  Rock beats scissors.");
            winner = "computer";
        }else{
            console.log("Both of you chose rock");
        }
    }

    if(computerChoice == "PAPER"){

        if(playerchoice == "SCISSORS"){
            console.log("You win!  Scissors beats paper.");
            winner = "human";
        }else if(playerchoice == "ROCK"){
            console.log("You lose!  Paper beats rock.");
            winner = "computer";
        }else{
            console.log("Both of you chose paper");
        }
    }

    if(computerChoice == "SCISSORS"){

        if(playerchoice == "ROCK"){
            console.log("You win! Rock beats scissors.");
            winner = "human";
        }else if(playerchoice == "PAPER"){
            console.log("You lose!  Scissors beats paper.");
            winner = "computer";
        }else{
            console.log("Both of you chose scissors");
        }
        
    }

    //console.log("Scores\nHuman: " + humanScore + " Computer: " + computerScore);
    console.log("Winner: " + winner);
    return winner;
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
