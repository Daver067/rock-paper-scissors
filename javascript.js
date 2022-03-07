let compChoice = 0;
let choice = 2;


function playerChoice() {
let choice = prompt("Rock, Paper, or Scissors?", '');
if (choice.toLowerCase() == 'rock'){ 
    choice = 0
    alert(choice);
    return choice;
}
else if (choice.toLowerCase() == 'paper'){
    choice = 1;
    alert(choice);
    return choice;
}
else if (choice.toLowerCase() == 'scissors'){
    choice = 2
    alert(choice);
    return choice;
}
else alert('you didn\'t play the game right.');
}



function vs(){
let y = playerChoice());
let x = compChoice;
if (x == y){
    alert('It\'s a draw')
}
console.log(y);
}