let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin == true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.background = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.background = "red";
    }
}

const drawGame = () => {
    //console.log("Game was draw");
    msg.innerText = "Game is draw , Play again";
}

const playgame = (userChoice) => {
    console.log("user choice= ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice= ", compChoice);

    if (userChoice === compChoice) {
        drawGame();

    }

    else {
        let userWin = true;

        if (userChoice === "rock") {
            //scissor.paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissor") {
            //paper,rock
            userWin = compChoice === "paper" ? true : false;
        }
        else {
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let compIndex = Math.floor(Math.random() * 3);
    return options[compIndex];
}



choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});