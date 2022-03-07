let compChoice = 0;
let choice = 0;
let yourScore = 0;
let compScore = 0;

function playerChoice() { // Converts players choice to number 0 = rock 1 = paper 2 = scissors
let choice = prompt("Rock, Paper, or Scissors?", '');
if (choice.toLowerCase() == 'rock'){ 
    choice = 0
    return choice;
}
else if (choice.toLowerCase() == 'paper'){
    choice = 1;
    return choice;
}
else if (choice.toLowerCase() == 'scissors'){
    choice = 2
    return choice;
}
else alert('you didn\'t play the game right.');
}

function compRandom(){ // generates random number from 0-2 for computers choice.
    let y = Math.floor(Math.random() *10);
    if (y >= 3) {
        return compRandom();
    }
    else { 
        compChoice = y;
        return compChoice;}
}


function vs(){ // comparing player choice to computer choice and deciding winner.
for (let i = 1; i < 6; i++){
let player = playerChoice();
let computer = compRandom();
if (player == computer){
    alert(`It\'s a draw, this was round ${i} out of 5 but it doesn\'t count. Score is ${yourScore} for you and ${compScore} for the computer`)
    --i;
}
else if ((player == 0 && computer ==2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)) {
    ++yourScore;
    alert(`You Won, this was round ${i} out of 5. Score is ${yourScore} for you and ${compScore} for the computer`);
} 
else {
++compScore;
alert(`You Lost, this was round ${i} out of 5. Score is ${yourScore} for you and ${compScore} for the computer` );}
}
console.log(`Final score was ${yourScore} for you vs ${compScore} for the computer`)
}
