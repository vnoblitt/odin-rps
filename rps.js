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

function checkChoice(humanChoice, computerChoice) {
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

let wins = 0;
let losses = 0;
let ties = 0;
let games = 0;

while(games < 5) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let results = checkChoice(humanChoice, computerChoice)

    switch (results) {
        case ("tie"):
            console.log("Tie game.");
            ties += 1;
            break;
        case ("computer"):
            console.log("You lose...");
            losses += 1;
            break;
        case ("human"):
            console.log("You win!");
            wins += 1;
            break;
    }

    games += 1;
    console.log(`The score is: ${wins} - ${losses} - ${ties}`)
}