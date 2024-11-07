console.log("Hello World");

function getComputerChoice() {
    let compNumb = Math.floor(Math.random() * 3);

    if (compNumb == 0) {
        console.log('Computer choice is Paper');
    }
        else if (compNumb == 1) {
            console.log('Computer choice is Rock');
        }
        else {
            console.log('Computer choice is Scissors');
        }
    return compNumb;
}
getComputerChoice();

function getHumanChoice () {
    let HumNumb = console.log(prompt('Choose Paper, Rock, or Scissors?'));
    return HumNumb;

   // if (HumNumb === 'Paper') 

}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(HumNumb, compNumb) {
    if (compNumb === 'Paper' && HumNumb === 'Rock') {
        console.log('You Lose! Paper beats Rock');
    }
    else if (compNumb === 'Paper' && HumNumb === 'Scissors') {
        console.log('You Win! Scissors beats Paper');
    }
    else if (compNumb === 'Rock' && HumNumb === 'Scissors') {
        console.log('You Lose! Rock beats Scissors');
    }
    else if (compNumb === 'Rock' && HumNumb === 'Paper') {
        console.log('You Win! Paper beats Rock');
    }
    else if (compNumb === 'Scissors' && HumNumb === 'Rock') {
        console.log('You Win! Rock beats Scissors');
    }
    else if (compNumb === 'Scissors' && HumNumb === 'Paper') {
        console.log('You Lose! Scissors beats Paper');
    }
}
playRound();
