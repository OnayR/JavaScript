const firstHand = document.getElementById("left");
const secondHand = document.getElementById("right");


const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

let resultaat;
let winner;
let rounds = 0;

function select(choice) {
    if (rounds < 3) {
        if (choice == "rock") {
            firstHand.src = "Images/rock.png";
        } else if (choice == "paper") {
            firstHand.src = "Images/paper.png";
        } else if (choice == "scissors") {
            firstHand.src = "Images/scissors.png";
        }

        const randomHand = Math.floor(Math.random() * 3);
        const botHand = ["Images/rock.png", "Images/paper.png", "Images/scissors.png"];
        secondHand.src = botHand[randomHand];
        rounds++;

        checkWinner();

    }
}

function checkWinner() {

    if (firstHand.src.includes("paper.png")
        && secondHand.src.includes("rock.png")) {
        resultaat = "You";

    } else if (firstHand.src.includes("scissors.png")
        && secondHand.src.includes("rock.png")) {
        resultaat = "Bot";

    } else if (firstHand.src.includes("rock.png")
        && secondHand.src.includes("rock.png")) {
        resultaat = "Tie";

    } else if (firstHand.src.includes("paper.png")
        && secondHand.src.includes("paper.png")) {
        resultaat = "Tie";

    } else if (firstHand.src.includes("rock.png")
        && secondHand.src.includes("paper.png")) {
        resultaat = "Bot";

    } else if (firstHand.src.includes("scissors.png")
        && secondHand.src.includes("paper.png")) {
        resultaat = "You";

    } else if (firstHand.src.includes("rock.png")
        && secondHand.src.includes("scissors.png")) {
        resultaat = "You";

    } else if (firstHand.src.includes("paper.png")
        && secondHand.src.includes("scissors.png")) {
        resultaat = "Bot";

    } else if (firstHand.src.includes("paper.png")
        && secondHand.src.includes("scissors.png")) {
        resultaat = "Tie";
    }


    switch (rounds) {
        case 1:
            r1.textContent = resultaat;
            break;
        case 2:
            r2.textContent = resultaat;
            break;
        case 3:
            r3.textContent = resultaat;
            break;
    }

    if (rounds == 3) {
        if (r1.textContent == "Bot" && r2.textContent == "Bot" || r1.textContent == "Bot" && r3.textContent == "Bot" || r2.textContent == "Bot" && r3.textContent == "Bot") {
            win.textContent = "Winner: Bot";
        } else if (r1.textContent == "You" && r2.textContent == "You" || r1.textContent == "You" && r3.textContent == "You" || r2.textContent == "You" && r3.textContent == "You") {
            win.textContent = "Winner: You";
        } else {
            win.textContent = "Winner: Tie";
        }
    }
}

function reset() {
    rounds = 0;
    r1.textContent = "-";
    r2.textContent = "-";
    r3.textContent = "-";
    win.textContent = "Winner:";
    firstHand.src = "";
    secondHand.src = "";
}