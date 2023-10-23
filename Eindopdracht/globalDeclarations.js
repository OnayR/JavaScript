const steen1 = document.getElementById("die1");
const steen2 = document.getElementById("die2");
const steen3 = document.getElementById("die3");
const steen4 = document.getElementById("die4");
const steen5 = document.getElementById("die5");

const rolls = document.getElementById("rolls");

const acesp1 = document.getElementById("aces--p1");
const twosp1 = document.getElementById("twos--p1");
const threesp1 = document.getElementById("threes--p1");
const foursp1 = document.getElementById("fours--p1");
const fivesp1 = document.getElementById("fives--p1");
const sixesp1 = document.getElementById("sixes--p1");

const turn = document.getElementById("turn");

var newSteen = [];

let rollsLeft = 3; // het aantal rollen die in de header moeten staan
let highscore = 0;
let highScoreText = document.getElementById("highscore");

let dieLock1 = false;
let dieLock2 = false;
let dieLock3 = false;
let dieLock4 = false;
let dieLock5 = false;

let steennummer1 = 0;
let steennummer2 = 0;
let steennummer3 = 0;
let steennummer4 = 0;
let steennummer5 = 0;

let currentPoints = 0;

let number = 0;



let een = 0;
let twee = 0;
let drie = 0;
let vier = 0;
let vijf = 0;

let fouseText = false;
let tkindText = false;
let fkindText = false;
let smallText = false;
let largeText = false;
let yahtzeeText = false;
let chanceText = false;

let onesText = 0;
let twosText = 0;
let threesText = 0;
let foursText = 0;
let fivesText = 0;
let sixesText = 0;

const fousep1 = document.getElementById("fouse--p1--locked");
const fouseTextp1 = document.getElementById("fouse--p1");
const tKindp1 = document.getElementById("tkind--p1");
const tKindTextp1 = document.getElementById("tkind--p1--locked");
const fKindp1 = document.getElementById("fkind--p1");
const fKindTextp1 = document.getElementById("fkind--p1--locked");
const chancep1 = document.getElementById("chance--p1");
const chanceTextp1 = document.getElementById("chance--p1--locked");
const yahtzeep1 = document.getElementById("yahtzee--p1");
const yahtzeeTextp1 = document.getElementById("yahtzee--p1--locked");
const smallp1 = document.getElementById("small--p1");
const smallTextp1 = document.getElementById("small--p1--locked");
const largep1 = document.getElementById("large--p1");
const largeTextp1 = document.getElementById("large--p1--locked");




const acesTextLockp1 = document.getElementById("aces--p1--locked");
const twosTextLockp1 = document.getElementById("twos--p1--locked");
const threesTextLockp1 = document.getElementById("threes--p1--locked");
const foursTextLockp1 = document.getElementById("fours--p1--locked");
const fivesTextLockp1 = document.getElementById("fives--p1--locked");
const sixesTextLockp1 = document.getElementById("sixes--p1--locked");

const subTotalp1 = document.getElementById("subtotal--p1--locked");
const bonusp1 = document.getElementById("bonus--p1--locked");
const totalpp1 = document.getElementById("total--p1--locked");
const secondTotalp1 = document.getElementById("total2--p1--locked");

const totalFirstBlockp1 = document.getElementById("top--p1--total");
const totalSecondBlockp1 = document.getElementById("bottom--p1--locked");
const grandTotalp1 = document.getElementById("grand--p1--locked");

function resetAllTextContentp1() {
    fousep1.textContent = "-";
    tKindTextp1.textContent = "-";
    fKindTextp1.textContent = "-";
    chanceTextp1.textContent = "-";
    yahtzeeTextp1.textContent = "-";
    smallTextp1.textContent = "-";
    largeTextp1.textContent = "-";
    acesTextLockp1.textContent = "-";
    twosTextLockp1.textContent = "-";
    threesTextLockp1.textContent = "-";
    foursTextLockp1.textContent = "-";
    fivesTextLockp1.textContent = "-";
    sixesTextLockp1.textContent = "-";
    subTotalp1.textContent = "-";
    bonusp1.textContent = "-";
    totalpp1.textContent = "-";
    secondTotalp1.textContent = "-";
    totalFirstBlockp1.textContent = "-";
    totalSecondBlockp1.textContent = "-";
    grandTotalp1.textContent = "-";
}
