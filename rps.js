/* Rock Paper Scissors */
        
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Select rock, paper, or scissors: ");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    /*if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        console.log("Only choose rock, paper, or scissors");
        return checkChoice(getHumanChoice(), computerChoice);
    }*/

    if (computerChoice == humanChoice){
        return "tie";
    } else if (computerChoice == "rock" && humanChoice != "paper") {
        return "computer";
    } else if (computerChoice == "paper" && humanChoice != "scissors") {
        return "computer";
    } else if (computerChoice == "scissors" && humanChoice != "rock") {
        return "computer";
    } else {
        return "human";
    }

} 

function generateDialogue(humanChoice, gameWon){
    let dialogue = "";
    console.log(humanChoice);
    switch (humanChoice){
        case ("rock"):
            dialogue += "Rock beats Scissors, ";
            break;
        case ("paper"):
            dialogue += "Paper beats Rock, ";
            break;
        case ("scissors"):
            dialogue += "Scissors beats Paper, ";
            break;
    }
    gameWon ? dialogue += "you win!" : dialogue += "you lose...";
    return dialogue;
}

function playGame() {
    let humanScore= 0;
    let computerScore = 0;
    let ties = 0;
    let games = 0;

    while(games < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        let results = playRound(humanChoice, computerChoice);

        switch (results) {
            case ("tie"):
                console.log("Tie game.");
                ties += 1;
                break;
            case ("computer"):
                console.log(generateDialogue(getHumanChoice,false));
                computerScore += 1;
                break;
            case ("human"):
                console.log(generateDialogue(getHumanChoice,true));
                humanScore += 1;
                break;
        }

        games += 1;
        console.log(`The score is: ${humanScore} - ${computerScore} - ${ties}`)
    }
}

playGame();
