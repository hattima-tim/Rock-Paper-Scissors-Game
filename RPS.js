function ComputerPlay(){
  let a="rock";
  let b="paper";
  let c="scissors";
  let d=Math.floor((Math.random()*30)+1);
  if (d<=10){
          return a;
      }
  else if (d<=20){
          return b;
      }
  else{
          return c;
      }
}
//ComputerPlay function done.This function play against the player.
//The "d" variable will select a random number each time the funtion is called.
//So as the "d" variable is giving a random number every time,
//I used it to select "rock","paper","scissors" randomly against the palyer.
function PlayRound(id){
//The purpose of this function is to make the COMPUTER and USER play against each other.
//And return the result of each match between USER and COMPUTER.    
//here the "id" parameter is referencing to the button id's.
  let PlayerInput=id;
  let PlayerSelection=PlayerInput.toLowerCase();
  let ComputerSelection=ComputerPlay();

  if (PlayerSelection=="rock" && ComputerSelection=="paper"){
          return "You lose"; //Here "You" means the user or the player.
      }
  else if (PlayerSelection=="scissors" && ComputerSelection=="rock"){
          return "You lose";
      }
  else if (PlayerSelection=="paper" && ComputerSelection=="scissors"){
          return "You lose";
      }
  else if (PlayerSelection=="paper" && ComputerSelection=="rock"){
          return "You won"; //Here "You" means the user or the player.
      }
  else if (PlayerSelection=="rock" && ComputerSelection=="scissors"){
          return "You won";
      }
  else if (PlayerSelection=="scissors" && ComputerSelection=="paper"){
          return "You won";
      }
  else if (PlayerSelection=="scissors" && ComputerSelection=="scissors"){
          return "tie";
      }
  else if (PlayerSelection=="paper" && ComputerSelection=="paper"){
          return "tie";
      }
  else if (PlayerSelection=="rock" && ComputerSelection=="rock"){
          return "tie";
      }
}
//Declaring "user" and "Computer" variable for letter use.
//They will be used to show the score of the match between "User" and "Computer".
let User=0;
let Computer=0;
//Writing the 'Tie' function.
//This function will execute when there is a tie in a match.
//This function will be used letter.Just declaring early.
function Tie(id){
    
    let tie=PlayRound(id);
    if (tie=="You won"){
        para.textContent="You won the MATCH!";
        paraUserScore.textContent=`Your Score=${User+=1}`;
        }
    else if (tie=="You lose"){
        para.textContent="Computer won the MATCH!";
        paraPcScore.textContent=`Computer Score=${Computer+=1}`;
        }
    else {
//The reason for this "else" is,
//I have found that there is a chance for atleast 3 TIE happening one after another.
//The code between LINE 65 and 71 is written to play an extra match when a match has it's first TIE
//and the code between LINE 72 and 84 is written to play an extra match when there is a second TIE.        
        
        let TieNumber2=PlayRound(id);
        if (TieNumber2=="You won"){
            para.textContent="You won the MATCH!";
            paraUserScore.textContent=`Your Score=${User+=1}`;
            }
        else if (TieNumber2=="You lose"){
            para.textContent="Computer won the MATCH!";
            paraPcScore.textContent=`Computer Score=${Computer+=1}`;
            }
//The code between 86 and 96 is written to play an extra match when there is a THIRD TIE.    
        else {
            
            let TieNumber3=PlayRound(id);
            if (TieNumber3=="You won"){
                para.textContent="You won the MATCH!";
                paraUserScore.textContent=`Your Score=${User+=1}`;
                }
            else if (TieNumber3=="You lose"){
                para.textContent="Computer won the MATCH!";
                paraPcScore.textContent=`Computer Score=${Computer+=1}`;
                } 
            }   
        }
}
//END of the 'Tie' function.
function Game(id){
//Start of the Game function.
//This function is for giving score to the "User" and "Computer"
//And showing the winner.
  let a=PlayRound(id);
  if (a=="You won"){
    paraUserScore.textContent=`Your Score=${User+=1}`;
    para.textContent="You won the MATCH!";
  }
  else if (a=="You lose"){
    paraPcScore.textContent=`Computer Score=${Computer+=1}`;
    para.textContent="Computer won the MATCH!";
  }
  else {
   return Tie(id);
  }
}
//Game() ends.

let para=document.querySelector('#p1');
let paraUserScore=document.querySelector('#user');
let paraPcScore=document.querySelector('#pc');
let paraWinner=document.querySelector('#winner');
let buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    Game(button.id);
    if(User===5){
        paraWinner.textContent="Click a button to start a new game.";
        User=0;
        Computer=0;
        para.textContent='CONGRATES!!YOU WON THE GAME!';
        paraUserScore.textContent='';
        paraPcScore.textContent='';
   }
    else if(Computer===5){
        paraWinner.textContent="Click a button to start a new game.";
        User=0;
        Computer=0;
        para.textContent=":'( YOU LOST THE GAME!";
        paraUserScore.textContent='';
        paraPcScore.textContent='';
   }
   else {
        paraWinner.textContent="PLAY FIVE ROUND TO WIN THE GAME!!";
   }
  });
 });
