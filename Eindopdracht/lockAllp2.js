let onesLockp2 = 0;
function onesLocktwo() {
    if (playerTwo) {
        if (onesLockp2 === 0) {
            acesTextLockp2.textContent = ones;
            onesLockp2++;
            onesTextp2 = ones;
            reset();
        }
        countTotal();
        acesp2.textContent = "-";
    }
}

let twosLockp2 = 0;
function twosLocktwo() {
    if (playerTwo) {
        if (twosLockp2 === 0) {
            twosTextLockp2.textContent = twos;
            twosLockp2++;
            twosTextp2 = twos;
            reset();
        }
        countTotal();
        twosp2.textContent = "-";
    }
}

let threesLockp2 = 0;
function threesLocktwo() {
    if (playerTwo) {
        if (threesLockp2 === 0) {
            threesTextLockp2.textContent = threes;
            threesLockp2++;
            threesTextp2 = threes;
            reset();
        }
        countTotal();
        threesp2.textContent = "-";
    }
}

let foursLockp2 = 0;
function foursLocktwo() {
    if (playerTwo) {
        if (foursLockp2 === 0) {
            foursTextLockp2.textContent = fours;
            foursLockp2++;
            foursTextp2 = fours;
            reset();
        }
        countTotal();
        foursp2.textContent = "-";
    }
}

let fivesLockp2 = 0;
function fivesLocktwo() {
    if (playerTwo) {
        if (fivesLockp2 === 0) {
            fivesTextLockp2.textContent = fives;
            fivesLockp2++;
            fivesTextp2 = fives;
            reset();
        }
        countTotal();
        fivesp2.textContent = "-";
    }
}

let sixesLockp2 = 0;
function sixesLocktwo() {
    if (playerTwo) {
        if (sixesLockp2 === 0) {
            sixesTextLockp2.textContent = sixes;
            sixesLockp2++;
            sixesTextp2 = sixes;
            reset();
        }
        countTotal();
        sixesp2.textContent = "-";
    }
}

let secondTotalTextp2 = 0;

let fouseLockp2 = 0;
function fouseLocktwo() {
    if (playerTwo) {
        if (fouseLockp2 === 0) {
            fousep2.textContent = fouseTextp2.textContent;
            fouseLockp2++;
            if (fouseText) {
                secondTotalTextp2 += 25;
            }
            reset();
        }
        countSecondTotal();
        fouseTextp2.textContent = "-";
    }
}

let tkindLockp2 = 0;
function tkindLocktwo() {
    if (playerTwo) {
        if (tkindLockp2 === 0) {
            tKindTextp2.textContent = tKindp2.textContent;
            tkindLockp2++;
            if (tkindText) {
                secondTotalTextp2 += currentPoints;
            }
            reset();
        }
        countSecondTotal();
        tKindp2.textContent = "-";
    }
}

let fkindLockp2 = 0;
function fkindLocktwo() {
    if (playerTwo) {
        if (fkindLockp2 === 0) {
            fKindTextp2.textContent = fKindp2.textContent;
            fkindLockp2++;
            if (fkindText) {
                secondTotalTextp2 += currentPoints;
            }
            reset();
        }
        countSecondTotal();
        fKindp2.textContent = "-";
    }
}

let smallLockp2 = 0;
function smallLocktwo() {
    if (playerTwo) {
        if (smallLockp2 === 0) {
            smallTextp2.textContent = smallp2.textContent;
            smallLockp2++;
            if (smallText) {
                secondTotalTextp2 += 30;
            }
            reset();
        }
        countSecondTotal();
        smallp2.textContent = "-";
    }
}

let largeLockp2 = 0;
function largeLocktwo() {
    if (playerTwo) {
        if (largeLockp2 === 0) {
            largeTextp2.textContent = largep2.textContent;
            largeLockp2++;
            if (largeText) {
                secondTotalTextp2 += 40;
            }
            reset();
        }
        countSecondTotal();
        largep2.textContent = "-";
    }
}

let yahtzeeLockp2 = 0;
function yahtzeeLocktwo() {
    if (playerTwo) {
        if (yahtzeeLockp2 === 0) {
            yahtzeeTextp2.textContent = yahtzeep2.textContent;
            yahtzeeLockp2++;
            if (yahtzeeText) {
                secondTotalTextp2 += 50;
            }
            reset();
        }
        countSecondTotal();
        yahtzeep2.textContent = "-";
    }
}

let chanceLockp2 = 0;
function chanceLocktwo() {
    if (playerTwo) {
        if (chanceLockp2 === 0) {
            chanceTextp2.textContent = chancep2.textContent;
            chanceLockp2++;
            secondTotalTextp2 += currentPoints;
            reset();
        }
        countSecondTotal();
        chancep2.textContent = "-";
    }
}

function resetLocksp2() {
    onesLockp2 = 0;
    twosLockp2 = 0;
    threesLockp2 = 0;
    foursLockp2 = 0;
    fivesLockp2 = 0;
    sixesLockp2 = 0;
    fouseLockp2 = 0;
    tkindLockp2 = 0;
    fkindLockp2 = 0;
    smallLockp2 = 0;
    largeLockp2 = 0;
    yahtzeeLockp2 = 0;
    chanceLockp2 = 0;
}



