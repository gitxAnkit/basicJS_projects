
game();

function getComputerChoice(){
    let x= Math.ceil((Math.random()*3));
    
    let choice= "";
    if (x==1){
        choice= "rock";
    }
    else if(x==2){
        choice= "paper";
    }
    else{
        choice= "scissor";
    }
    return choice;
}
var computerPoints = 0;
var playerPoints = 0;

function playRound(computerChoice, playerChoice){

    if( computerChoice == playerChoice ){

        console.log("Draw!!");
    }
    else if(playerChoice == "rock" && computerChoice == "scissor"){

         console.log("You Win!! Rock beat Scissor ");
         ++playerPoints;

    }
   
    else if(playerChoice =="paper" && computerChoice == "rock"){

        console.log("You Win!! Paper beat Rock ");
        ++playerPoints;

    } 
    else if(playerChoice == "scissor" && computerChoice == "paper"){

        console.log("You Win!! Scissor beat Paper ");
        ++playerPoints;
    
    }
    else {

        console.log(" You Lose!! ");
        ++computerPoints;
   
    }

}
// const computerChoice= getComputerChoice();
// const playerChoice= "Paper";
// console.log(playRound(computerChoice,playerChoice));
// console.log(playerPoints);

    function game(){

        for(let i =0; i<5; ++i){

            let playerChoice = prompt("Your Choice? ", "");
            playerChoice=playerChoice.toLowerCase();

            let computerChoice= getComputerChoice();

            playRound(computerChoice, playerChoice);

       } 
        if(playerPoints > computerPoints){

            console.log("You Win this Game!!  ");

        } else{

            console.log("You Lose this Game!!");

        }
    }