
function allLines() {
    line(acesTextLockp1, acesp1);
    line(twosTextLockp1, twosp1);
    line(threesTextLockp1, threesp1);
    line(foursTextLockp1, foursp1);
    line(fivesTextLockp1, fivesp1);
    line(sixesTextLockp1, sixesp1);
    line(fousep1, fouseTextp1);
    line(fKindTextp1, fKindp1);
    line(tKindTextp1, tKindp1);
    line(chanceTextp1, chancep1);
    line(yahtzeeTextp1, yahtzeep1);
    line(smallTextp1, smallp1);
    line(largeTextp1, largep1);

    line(acesTextLockp2, acesp2);
    line(twosTextLockp2, twosp2);
    line(threesTextLockp2, threesp2);
    line(foursTextLockp2, foursp2);
    line(fivesTextLockp2, fivesp2);
    line(sixesTextLockp2, sixesp2);
    line(fousep2, fouseTextp2);
    line(fKindTextp2, fKindp2);
    line(tKindTextp2, tKindp2);
    line(chanceTextp2, chancep2);
    line(yahtzeeTextp2, yahtzeep2);
    line(smallTextp2, smallp2);
    line(largeTextp2, largep2);
}

function line(a, b) {
    if (a.textContent != "-") {
        b.textContent = "-";
    }
}

function reset() {
    resetsteen();
    console.log(ones, twos, threes, fours, fives, sixes);
    console.log(sixesText, sixesTextp2);
    resetTextContent();
    playerSwitch++;
    swapTurn();
    currentPoints = 0;
    newSteen.length = 0;
    resetNummer();
    checkAll();

    rollsLeft = 3;

    rolls.textContent = rollsLeft;
    allLines();
}

function resetsteen() {
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    fives = 0;
    sixes = 0;

    steen1.src = "";
    steen2.src = "";
    steen3.src = "";
    steen4.src = "";
    steen5.src = "";

    unlock1 = 0;
    unlock2 = 0;
    unlock3 = 0;
    unlock4 = 0;
    unlock5 = 0;

    dieLock1 = false;
    dieLock2 = false;
    dieLock3 = false;
    dieLock4 = false;
    dieLock5 = false;

    steen1.style.borderColor = "black";
    steen2.style.borderColor = "black";
    steen3.style.borderColor = "black";
    steen4.style.borderColor = "black";
    steen5.style.borderColor = "black";
}

function resetTextContent() {
    if (playerOne) {
        acesp1.textContent = "0";
        twosp1.textContent = "0";
        threesp1.textContent = "0";
        foursp1.textContent = "0";
        fivesp1.textContent = "0";
        sixesp1.textContent = "0";
        fouseTextp1.textContent = "0";
        tKindp1.textContent = "0";
        fKindp1.textContent = "0";
        smallp1.textContent = "0";
        largep1.textContent = "0";
        yahtzeep1.textContent = "0";
        chancep1.textContent = "0";
    } else if (playerTwo) {
        acesp2.textContent = "0";
        twosp2.textContent = "0";
        threesp2.textContent = "0";
        foursp2.textContent = "0";
        fivesp2.textContent = "0";
        sixesp2.textContent = "0";
        fouseTextp2.textContent = "0";
        tKindp2.textContent = "0";
        fKindp2.textContent = "0";
        smallp2.textContent = "0";
        largep2.textContent = "0";
        yahtzeep2.textContent = "0";
        chancep2.textContent = "0";
    }
}

function restart() {
    resetTextContent();
    resetAllTextContentp1();
    resetAllTextContentp2();
    currentPoints = 0;
    playerSwitch = 0;
    rollsLeft = 3;
    resetLocksp1();
    resetLocksp2();
    resetsteen();
    swapTurn();
    checkAll();
    newSteen.length = 0;
    resetNummer();
    playerOne = true;
    playerTwo = false;
    rolls.textContent = rollsLeft;
}
