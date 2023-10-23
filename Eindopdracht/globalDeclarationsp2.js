let onesTextp2 = 0;
let twosTextp2 = 0;
let threesTextp2 = 0;
let foursTextp2 = 0;
let fivesTextp2 = 0;
let sixesTextp2 = 0;

const acesp2 = document.getElementById("aces--p2");
const twosp2 = document.getElementById("twos--p2");
const threesp2 = document.getElementById("threes--p2");
const foursp2 = document.getElementById("fours--p2");
const fivesp2 = document.getElementById("fives--p2");
const sixesp2 = document.getElementById("sixes--p2");

const fousep2 = document.getElementById("fouse--p2--locked");
const fouseTextp2 = document.getElementById("fouse--p2");
const tKindp2 = document.getElementById("tkind--p2");
const tKindTextp2 = document.getElementById("tkind--p2--locked");
const fKindp2 = document.getElementById("fkind--p2");
const fKindTextp2 = document.getElementById("fkind--p2--locked");
const chancep2 = document.getElementById("chance--p2");
const chanceTextp2 = document.getElementById("chance--p2--locked");
const yahtzeep2 = document.getElementById("yahtzee--p2");
const yahtzeeTextp2 = document.getElementById("yahtzee--p2--locked");
const smallp2 = document.getElementById("small--p2");
const smallTextp2 = document.getElementById("small--p2--locked");
const largep2 = document.getElementById("large--p2");
const largeTextp2 = document.getElementById("large--p2--locked");


const acesTextLockp2 = document.getElementById("aces--p2--locked");
const twosTextLockp2 = document.getElementById("twos--p2--locked");
const threesTextLockp2 = document.getElementById("threes--p2--locked");
const foursTextLockp2 = document.getElementById("fours--p2--locked");
const fivesTextLockp2 = document.getElementById("fives--p2--locked");
const sixesTextLockp2 = document.getElementById("sixes--p2--locked");

const subTotalp2 = document.getElementById("subtotal--p2--locked");
const bonusp2 = document.getElementById("bonus--p2--locked");
const totalpp2 = document.getElementById("total--p2--locked");
const secondTotalp2 = document.getElementById("total2--p2--locked");

const totalFirstBlockp2 = document.getElementById("top--p2--total");
const totalSecondBlockp2 = document.getElementById("bottom--p2--locked");
const grandTotalp2 = document.getElementById("grand--p2--locked");

function resetAllTextContentp2() {
    fousep2.textContent = "-";
    tKindTextp2.textContent = "-";
    fKindTextp2.textContent = "-";
    chanceTextp2.textContent = "-";
    yahtzeeTextp2.textContent = "-";
    smallTextp2.textContent = "-";
    largeTextp2.textContent = "-";
    acesTextLockp2.textContent = "-";
    twosTextLockp2.textContent = "-";
    threesTextLockp2.textContent = "-";
    foursTextLockp2.textContent = "-";
    fivesTextLockp2.textContent = "-";
    sixesTextLockp2.textContent = "-";
    subTotalp2.textContent = "-";
    bonusp2.textContent = "-";
    totalpp2.textContent = "-";
    secondTotalp2.textContent = "-";
    totalFirstBlockp2.textContent = "-";
    totalSecondBlockp2.textContent = "-";
    grandTotalp2.textContent = "-";
}
