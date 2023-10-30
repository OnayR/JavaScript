
function roll() {//deze functie voert uit wanneer de speler op roll klikt
    if (rollsLeft > 0) {
        console.log("Roll");

        if (!dieLock1) {
            steen1.src = randomDice();
            declareNumber(steen1.src);
            steennummer1 = number;
        }
        if (!dieLock2) {
            steen2.src = randomDice();
            declareNumber(steen2.src);
            steennummer2 = number;
        }
        if (!dieLock3) {
            steen3.src = randomDice();
            declareNumber(steen3.src);
            steennummer3 = number;
        }
        if (!dieLock4) {
            steen4.src = randomDice();
            declareNumber(steen4.src);
            steennummer4 = number;
        }
        if (!dieLock5) {
            steen5.src = randomDice();
            declareNumber(steen5.src);
            steennummer5 = number;
        }
        currentPoints = steennummer1 + steennummer2 + steennummer3 + steennummer4 + steennummer5;

        newSteen.length = 0;
        newSteen.push(steennummer1, steennummer2, steennummer3, steennummer4, steennummer5);
        console.log(newSteen);

        rollsLeft--;
        rolls.textContent = rollsLeft;
    }
    checkAll();

    calculatePoints("a");

    single(10, 10);

    allLines();


}

function randomDice() {
    const randomHand = Math.floor(Math.random() * 6);
    const botHand = ["Images/Dice-1.png", "Images/Dice-2.png", "Images/Dice-3.png",
        "Images/Dice-4.png", "Images/Dice-5.png", "Images/Dice-6.png"];

    return botHand[randomHand];
}

function declareNumber(a) {
    if (a.includes("Images/Dice-1.png")) {
        number = 1;
    } else if (a.includes("Images/Dice-2.png")) {
        number = 2;
    } else if (a.includes("Images/Dice-3.png")) {
        number = 3;
    } else if (a.includes("Images/Dice-4.png")) {
        number = 4;
    } else if (a.includes("Images/Dice-5.png")) {
        number = 5;
    } else if (a.includes("Images/Dice-6.png")) {
        number = 6;
    }
}


let unlock1 = 0;
let unlock2 = 0;
let unlock3 = 0;
let unlock4 = 0;
let unlock5 = 0;

function lockDie(die) {
    switch (die) {
        case "die1":
            unlock1++;
            dieLock1 = unlock1 % 2 !== 0;
            borderChange(steen1, unlock1);
            break;
        case "die2":
            unlock2++;
            dieLock2 = unlock2 % 2 !== 0;
            borderChange(steen2, unlock2);
            break;
        case "die3":
            unlock3++;
            dieLock3 = unlock3 % 2 !== 0;
            borderChange(steen3, unlock3);
            break;
        case "die4":
            unlock4++;
            dieLock4 = unlock4 % 2 !== 0;
            borderChange(steen4, unlock4);
            break;
        case "die5":
            unlock5++;
            dieLock5 = unlock5 % 2 !== 0;
            borderChange(steen5, unlock5);
            break;
        default:
            break;
    }
}

function borderChange(a, b) {
    if (b % 2 !== 0) {
        a.style.borderColor = "red";
    } else {
        a.style.borderColor = "black";
    }
}

function calculatePoints(dice) {
    console.log(currentPoints);

}

let playerSwitch = 0;
let playerOne = true;
let playerTwo = false;
function swapTurn() {
    if (playerSwitch % 2 != 0) {
        playerOne = false;
        playerTwo = true;
        turn.textContent = "Player 2";
    } else {
        playerOne = true;
        playerTwo = false;
        turn.textContent = "Player 1";
    }
}
let subTotalTextp1 = 0;
let subTotalTextp2 = 0;
let bonusTotalp1 = 0;
let bonusTotalp2 = 0;
let totalp1 = 0;
let totalp2 = 0;
function countTotal() {
    if (onesLockp1 !== 0 && twosLockp1 !== 0 && threesLockp1 !== 0 && foursLockp1 !== 0 && fivesLockp1 !== 0 && sixesLockp1 !== 0) {
        subTotalTextp1 = onesText + twosText + threesText + foursText + fivesText + sixesText;
        subTotalp1.textContent = subTotalTextp1;

        if (subTotalTextp1 >= 63) {
            bonusTotalp1 += 35;
        }

        totalp1 = subTotalTextp1 + bonusTotalp1;
        bonusp1.textContent = bonusTotalp1;
        totalpp1.textContent = totalp1;
        totalFirstBlockp1.textContent = totalp1;
        grandTotal();
    }
    if (onesLockp2 !== 0 && twosLockp2 !== 0 && threesLockp2 !== 0 && foursLockp2 !== 0 && fivesLockp2 !== 0 && sixesLockp2 !== 0) {
        subTotalTextp2 = onesTextp2 + twosTextp2 + threesTextp2 + foursTextp2 + fivesTextp2 + sixesTextp2;
        subTotalp2.textContent = subTotalTextp2;

        if (subTotalTextp2 >= 63) {
            bonusTotalp2 += 35;
        }

        totalp2 = subTotalTextp2 + bonusTotalp2;
        bonusp2.textContent = bonusTotalp2;
        totalpp2.textContent = totalp2;
        totalFirstBlockp2.textContent = totalp2;
        grandTotal();
    }
}


function countSecondTotal() {
    if (fouseLockp1 != 0 && tkindLockp1 != 0 && fkindLockp1 != 0
        && smallLockp1 != 0 && largeLockp1 != 0 && yahtzeeLockp1 != 0 && chanceLockp1 != 0) {
        secondTotalp1.textContent = secondTotalTextp1;
        totalSecondBlockp1.textContent = secondTotalTextp1;
        grandTotal()
    }
    if (fouseLockp2 != 0 && tkindLockp2 != 0 && fkindLockp2 != 0
        && smallLockp2 != 0 && largeLockp2 != 0 && yahtzeeLockp2 != 0 && chanceLockp2 != 0) {
        secondTotalp2.textContent = secondTotalTextp2;
        totalSecondBlockp2.textContent = secondTotalTextp2;
        grandTotal()
    }
}


function grandTotal() {
    let grandTotal = 0;
    if (totalFirstBlockp1.textContent != "-" && totalSecondBlockp1.textContent != "-") {
        grandTotalp1.textContent = totalp1 + secondTotalTextp1;
        grandTotal = totalp1 + secondTotalTextp1;
    }
    if (totalFirstBlockp2.textContent != "-" && totalSecondBlockp2.textContent != "-") {
        grandTotalp2.textContent = totalp2 + secondTotalTextp2;
        grandTotal = totalp2 + secondTotalTextp2;
    }

    if (grandTotal > highscore) {
        highscore = grandTotal;
        highScoreText.textContent = highscore;
    }

}
