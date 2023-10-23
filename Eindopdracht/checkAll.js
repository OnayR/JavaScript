
function checkTkind(a) {
    if (een >= 3 || twee >= 3 || drie >= 3) {
        a.textContent = currentPoints;
        tkindText = true;
    } else {
        a.textContent = "0";
        tkindText = false;
    }
}

function checkFkind(a) {
    if (een >= 4 || twee >= 4) {
        a.textContent = currentPoints;
        fkindText = true;
    } else {
        a.textContent = "0";
        fkindText = false;
    }
}

function checkChance(a) {
    a.textContent = currentPoints;
}

function checkSmall(a) {
    if (een === 1 && twee === 1 && drie === 1 && vier === 1) {
        a.textContent = "30";
        smallText = true;
    } else if (twee === 1 && drie === 1 && vier === 1 && vijf === 1) {
        a.textContent = "30";
        smallText = true;
    } else if (een === 1 && twee === 1 && drie === 1 && vijf === 1) {
        a.textContent = "30";
        smallText = true;
    } else if (een === 1 && twee === 1 && vier === 1 && vijf === 1) {
        a.textContent = "30";
        smallText = true;
    } else if (een === 1 && drie === 1 && vier === 1 && vijf === 1) {
        a.textContent = "30";
        smallText = true;
    } else {
        a.textContent = "0";
        smallText = false;
    }
}

function checkLarge(a) {
    if (een === 1 && twee === 1 && drie === 1 && vier === 1 && vijf === 1) {
        a.textContent = "40";
        largeText = true;
    } else {
        a.textContent = "0";
        largeText = false;
    }
}

function checkYahtzee(a) {
    if (een === 5) {
        a.textContent = "50";
        yahtzeeText = true;
    } else {
        a.textContent = "0";
        yahtzeeText = false;
    }
}

function fullHouse(a) {
    een = arrayCheck(steennummer1);
    twee = arrayCheck(steennummer2);
    drie = arrayCheck(steennummer3);
    vier = arrayCheck(steennummer4);
    vijf = arrayCheck(steennummer5);
    console.log(een);
    console.log(twee);
    console.log(drie);
    console.log(vier);
    console.log(vijf);
    if (een === 3 && twee === 2 || een === 2 && twee === 3) {
        a.textContent = "25";
        fouseText = true;
    } else if (twee === 3 && drie === 2 || twee === 2 && drie === 3) {
        a.textContent = "25";
        fouseText = true;
    } else if (vijf === 2 && een === 3 || vijf === 3 && een === 2) {
        a.textContent = "25";
        fouseText = true;
    } else {
        a.textContent = "0";
        fouseText = false;
    }
}

function arrayCheck(steenNummer) {
    let num = 0;
    for (i = 0; i < newSteen.length; i++) {
        if (newSteen[i] === steenNummer) {
            num++;
        }
    }
    return num;
}

let ones = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;

function single(num, dice) {
    ones = 0;
    twos = 0;
    threes = 0;
    fours = 0;
    fives = 0;
    sixes = 0;

    checkIfNum(steennummer1);
    checkIfNum(steennummer2);
    checkIfNum(steennummer3);
    checkIfNum(steennummer4);
    checkIfNum(steennummer5);
    if (playerOne) {
        acesp1.textContent = ones;
        twosp1.textContent = twos;
        threesp1.textContent = threes;
        foursp1.textContent = fours;
        fivesp1.textContent = fives;
        sixesp1.textContent = sixes;
    } else if (playerTwo) {
        acesp2.textContent = ones;
        twosp2.textContent = twos;
        threesp2.textContent = threes;
        foursp2.textContent = fours;
        fivesp2.textContent = fives;
        sixesp2.textContent = sixes;
    }
}

function checkIfNum(a) {

    switch (a) {
        case 1:
            ones++;
            break;
        case 2:
            twos += 2;
            break;
        case 3:
            threes += 3;
            break;
        case 4:
            fours += 4;
            break;
        case 5:
            fives += 5;
            break;
        case 6:
            sixes += 6;
            break;
    }
}

function checkAll() {
    if (playerOne) {
        fullHouse(fouseTextp1);
        checkTkind(tKindp1);
        checkFkind(fKindp1);
        checkSmall(smallp1);
        checkLarge(largep1);
        checkYahtzee(yahtzeep1);
        checkChance(chancep1);
    } else if (playerTwo) {
        fullHouse(fouseTextp2);
        checkTkind(tKindp2);
        checkFkind(fKindp2);
        checkSmall(smallp2);
        checkLarge(largep2);
        checkYahtzee(yahtzeep2);
        checkChance(chancep2);
    }
}

function resetNummer() {
    een = 0;
    twee = 0;
    drie = 0;
    vier = 0;
    vijf = 0;
}