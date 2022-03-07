let compChoice = 0;
let choice = 2;

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
let player = playerChoice();
let computer = compRandom();
console.log(player);
console.log(computer);
if (player == computer){
    alert('It\'s a draw')
}
else if ((player == 0 && computer ==2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)) {
    alert('You won!');
} 
else alert('you lost');
}