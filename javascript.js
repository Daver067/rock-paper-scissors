let compChoice = 0;
let choice = 0;
let yourScore = 0;
let compScore = 0;
let roundsPlayed = 0;


function playerChoice() { // Converts players choice to number 0 = rock 1 = paper 2 = scissors
let choice = prompt("Rock, Paper, or Scissors?", '');
if ((choice === null) || (choice === '')){
    alert('please enter a value');
    return playerChoice();
}
else if (choice.toLowerCase() == 'rock'){ 
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
else if (choice.toLowerCase() == 'quit'){ //Testing is taking too long. Remove this when done testing.
    choice = 7;
    return choice;
}
else alert('please check your spelling');
    return playerChoice();
}


function compRandom(){ // generates random number from 0-2 for computers choice.
    let compChoice = Math.floor(Math.random() *10);
    if (compChoice >= 3) {
        return compRandom();
    }
    else { 
        return compChoice;}
}


function checkTie(){ //checks to see if both inputs were the same and lowers the round counter by 1
    if (compChoice == choice) {
        alert(`It\'s a draw, this was round ${++roundsPlayed} out of 5 but it doesn\'t count. Score is ${yourScore} for you and ${compScore} for the computer`);
        --roundsPlayed;
        return true;
    }
    else return false;
}


function checkWin(){ //checks for player win conditions
    if ((choice == 0 && compChoice ==2) || (choice == 1 && compChoice == 0) || (choice == 2 && compChoice == 1)) {
        ++yourScore;
        alert(`You Won, this was round ${++roundsPlayed} out of 5. Score is ${yourScore} for you and ${compScore} for the computer`)
        return;
    }
    else return;
}


function checkLoss(){ //checks for player loss conditions
    if ((choice == 0 && compChoice ==1) || (choice== 1 && compChoice == 2) || (choice == 2 && compChoice == 0)) {
        ++compScore;
        alert(`You Lost, this was round ${++roundsPlayed} out of 5. Score is ${yourScore} for you and ${compScore} for the computer`);
        return;
    }
else return;
}


function erase(){ // clears scoreboard after the game has ended
    compChoice = 0;
    choice = 0;
    yourScore = 0;
    compScore = 0;
    roundsPlayed = 0;
}


function vs(){ // comparing player choice to computer choice and deciding winner.
    for (let rounds = 1; rounds < 6; rounds++){
    choice = playerChoice();
    compChoice = compRandom();
    checkTie() == true ? (--rounds) : (rounds = rounds);
    checkWin();
    checkLoss()
    choice == 7 ? (rounds = 5) : (rounds = rounds) // Remove this when removing 'Quit' Option
    }
    console.log(`The final score was ${yourScore} for you and ${compScore} for the computer. Thanks for playing`);
    erase();
    }