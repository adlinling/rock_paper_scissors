//console.log("Hello World");


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






function playRound(humanChoice, computerChoice){

    let playerchoice = humanChoice.toUpperCase();
    let winner = "no winner";

    //console.log("Player choice:" + playerchoice)
    //console.log("Computer choice:" + computerChoice)

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
    //console.log("Winner: " + winner);
    return winner;
}



function playGame(){

    const maxrounds = 5;

    //let humanscore = document.querySelection("#humanscore");


    let round = 1;

    let humanScore = 0;
    let computerScore = 0;
    let roundwinner;

    while (round <= maxrounds) {

        console.log("Round: " + round);
        
        let humanSelection = getHumanChoice().toUpperCase();
        let computerSelection = getComputerChoice();
        
        console.log("Player choice: " + humanSelection)
        console.log("Computer choice: " + computerSelection)

        if(humanSelection !== computerSelection){

            roundwinner = playRound(humanSelection, computerSelection);

            if(roundwinner == "human"){
                humanScore++;
            }else if (roundwinner == "computer"){
                computerScore++;
            }else{
                roundwinner = "no winner"
            }

            console.log("Winner of Round " + round +": " + roundwinner + "\n\n");

            round++;
        }
 
    }


    if(humanScore > computerScore){
        console.log("You win!");
    }else{
        console.log("You lost!");
    }

    console.log("Final scores\nHuman: " + humanScore + " Computer: " + computerScore);



}

