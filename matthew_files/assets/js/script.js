let btn = document.querySelector('button')
let score1 = document.querySelector('#number1'); 
let score2 = document.querySelector('#number2');
let score3 = document.querySelector('#number3');
let score4 = document.querySelector('#number4');
let score5 = document.querySelector('#number5');

var pastPlayers = [
    {name: "Joe1", score: 23 },
    {name: "Joe2", score: 34 },
    {name: "Joe3", score: 156 },
    {name: "Joe4", score: 64 },
    {name: "Joe5", score: 95 },
];

// var storage = localStorage.getItem(pastPlayers);

pastPlayers.sort((a, b) => b.score - a.score)

var scoreBoard = document.getElementById('scoreBoard')
var orderedList = document.createElement('ol')
scoreBoard.appendChild(orderedList)

// scoreBoard.classList.add(boulma css style)
pastPlayers.forEach( (element) => {
    var strInfo = `${element.name} and ${element.score}`;
    var tempElement = document.createElement('li');
    tempElement.innerText = strInfo;
    orderedList.appendChild(tempElement);
} )


let highScore1 = range(1000, 2000);
let highScore2 = range(700, 2000);
let highScore3 = range(1200, 2000);
let highScore4 = range(900, 2000);
let highScore5 = range(1300, 2000);


function range(start, end) {
    let number = end - start + 1;
    let numberRandom = Math.random() * number;
    let result = Math.floor(numberRandom) + start;
    return result;
}

btn.addEventListener('click', () => {
    score1.innerText = "Player 1 had " + highScore1 + " points"
    score2.innerText = "Player 2 had " + highScore2 + " points"
    score3.innerText = "Player 3 had " + highScore3 + " points"
    score4.innerText = "Player 4 had " + highScore4 + " points"
    score5.innerText = "Player 5 had " + highScore5 + " points"
});

function debug(player, score) {

}

function currentPlayer() {

}

console.log(highScore1,
    highScore2,
    highScore3,
    highScore4,
    highScore5);
