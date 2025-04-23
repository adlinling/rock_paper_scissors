console.log("Hello World");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){

    const randnum = Math.random();
    let string = "";

    console.log(randnum);

    if (randnum > 0.666) {
        string = "ROCK";
    } else if (randnum >= 0.333 && randnum < 0.666) {
        string = "PAPER";
    } else {
        string = "SCISSORS";
    }

    console.log("Computer choice:" + string);

    return string;
}



function getHumanChoice(){

    let playerchoice;
    
    let input = prompt("Enter your choice");

    console.log("Player entered: " + input);

    playerchoice = input.toUpperCase();
   
    return playerchoice;
    
}


console.log(getComputerChoice());
console.log("Player choice: " + getHumanChoice());


function playRound(humanChoice, computerChoice){

}
