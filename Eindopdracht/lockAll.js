let onesLockp1 = 0;
function onesLock() {
    if (playerOne) {
        if (onesLockp1 === 0) {
            acesTextLockp1.textContent = ones;
            onesLockp1++;
            onesText = ones;
            reset();
        }
        countTotal();
        acesp1.textContent = "-";
    }
}

let twosLockp1 = 0;
function twosLock() {
    if (playerOne) {
        if (twosLockp1 === 0) {
            twosTextLockp1.textContent = twos;
            twosLockp1++;
            twosText = twos;
            reset();
        }
        countTotal();
        twosp1.textContent = "-";
    }
}

let threesLockp1 = 0;
function threesLock() {
    if (playerOne) {
        if (threesLockp1 === 0) {
            threesTextLockp1.textContent = threes;
            threesLockp1++;
            threesText = threes;
            reset();
        }
        countTotal();
        threesp1.textContent = "-";
    }
}

let foursLockp1 = 0;
function foursLock() {
    if (playerOne) {
        if (foursLockp1 === 0) {
            foursTextLockp1.textContent = fours;
            foursLockp1++;
            foursText = fours;
            reset();
        }
        countTotal();
        foursp1.textContent = "-";
    }
}

let fivesLockp1 = 0;
function fivesLock() {
    if (playerOne) {
        if (fivesLockp1 === 0) {
            fivesTextLockp1.textContent = fives;
            fivesLockp1++;
            fivesText = fives;
            reset();
        }
        countTotal();
        fivesp1.textContent = "-";
    }
}

let sixesLockp1 = 0;
function sixesLock() {
    if (playerOne) {
        if (sixesLockp1 === 0) {
            sixesTextLockp1.textContent = sixes;
            sixesLockp1++;
            sixesText = sixes;
            reset();
        }
        countTotal();
        sixesp1.textContent = "-";
    }
}


let secondTotalTextp1 = 0;


let fouseLockp1 = 0;
function fouseLock() {
    if (playerOne) {
        if (fouseLockp1 === 0) {
            fousep1.textContent = fouseTextp1.textContent;
            fouseLockp1++;
            if (fouseText) {
                secondTotalTextp1 += 25;
            }
            reset();
        }
        countSecondTotal();
        fouseTextp1.textContent = "-";
    }
}

let tkindLockp1 = 0;
function tkindLock() {
    if (playerOne) {
        if (tkindLockp1 === 0) {
            tKindTextp1.textContent = tKindp1.textContent;
            tkindLockp1++;
            if (tkindText) {
                secondTotalTextp1 += currentPoints;
            }
            reset();
        }
        countSecondTotal();
        tKindp1.textContent = "-";
    }
}

let fkindLockp1 = 0;
function fkindLock() {
    if (playerOne) {
        if (fkindLockp1 === 0) {
            fKindTextp1.textContent = fKindp1.textContent;
            fkindLockp1++;
            if (fkindText) {
                secondTotalTextp1 += currentPoints;
            }
            reset();
        }
        countSecondTotal();
        fKindp1.textContent = "-";
    }
}

let smallLockp1 = 0;
function smallLock() {
    if (playerOne) {
        if (smallLockp1 === 0) {
            smallTextp1.textContent = smallp1.textContent;
            smallLockp1++;
            if (smallText) {
                secondTotalTextp1 += 30;
            }
            reset();
        }
        countSecondTotal();
        smallp1.textContent = "-";
    }
}

let largeLockp1 = 0;
function largeLock() {
    if (playerOne) {
        if (largeLockp1 === 0) {
            largeTextp1.textContent = largep1.textContent;
            largeLockp1++;
            if (largeText) {
                secondTotalTextp1 += 40;
            }
            reset();
        }
        countSecondTotal();
        largep1.textContent = "-";
    }
}

let yahtzeeLockp1 = 0;
function yahtzeeLock() {
    if (playerOne) {
        if (yahtzeeLockp1 === 0) {
            yahtzeeTextp1.textContent = yahtzeep1.textContent;
            yahtzeeLockp1++;
            if (yahtzeeText) {
                secondTotalTextp1 += 50;
            }
            reset();
        }
        countSecondTotal();
        yahtzeep1.textContent = "-";
    }
}

let chanceLockp1 = 0;
function chanceLock() {
    if (playerOne) {
        if (chanceLockp1 === 0) {
            chanceTextp1.textContent = chancep1.textContent;
            chanceLockp1++;
            secondTotalTextp1 += currentPoints;
            reset();
        }
        countSecondTotal();
        chancep1.textContent = "-";
    }
}

function resetLocksp1() {
    onesLockp1 = 0;
    twosLockp1 = 0;
    threesLockp1 = 0;
    foursLockp1 = 0;
    fivesLockp1 = 0;
    sixesLockp1 = 0;
    fouseLockp1 = 0;
    tkindLockp1 = 0;
    fkindLockp1 = 0;
    smallLockp1 = 0;
    largeLockp1 = 0;
    yahtzeeLockp1 = 0;
    chanceLockp1 = 0;
}
