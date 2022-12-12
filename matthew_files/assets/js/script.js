// let btn = document.querySelector('button')
// let score1 = document.querySelector('#number1'); 
// let score2 = document.querySelector('#number2');
// let score3 = document.querySelector('#number3');
// let score4 = document.querySelector('#number4');
// let score5 = document.querySelector('#number5');

var pastPlayers = [
    {name: "Joe1", score: -1000 },
    {name: "Joe2", score: -10.030},
    {name: "Joe3", score: 1400.923 },
    {name: "Joe4", score: 110 },
    {name: "Joe5", score: 95.239 },
];

var storageValue = parseFloat(localStorage.getItem("currentUser")).toFixed(2);
console.log(storageValue);
var tempObjects = {name: "currentUser", score: storageValue}
console.log(tempObjects)
pastPlayers.push(tempObjects)
pastPlayers.sort((a, b) => b.score - a.score)

var scoreBoard = document.getElementById('scoreBoard')
scoreBoard.classList.add('box');
scoreBoard.classList.add('whatacrypto-color2');
scoreBoard.classList.add('has-text-centered');
scoreBoard.classList.add('whatacrypto-blue');
scoreBoard.classList.add('is-size-3');
scoreBoard.classList.add('mx-6');
var orderedList = document.createElement('ol')
scoreBoard.appendChild(orderedList)

// scoreBoard.classList.add(boulma css style)
pastPlayers.forEach( (element) => {
    var tmpScore = parseFloat(element.score).toFixed(2);
    console.log(typeof tmpScore);
    var strInfo = `Name: ${element.name}, Score:  BTC ${tmpScore}`;
    var tempElement = document.createElement('li');
    tempElement.innerText = strInfo;
    orderedList.appendChild(tempElement);
} )


// let highScore1 = range(1000, 2000);
// let highScore2 = range(700, 2000);
// let highScore3 = range(1200, 2000);
// let highScore4 = range(900, 2000);
// let highScore5 = range(1300, 2000);


// function range(start, end) {
//     let number = end - start + 1;
//     let numberRandom = Math.random() * number;
//     let result = Math.floor(numberRandom) + start;
//     return result;
// }

// btn.addEventListener('click', () => {
//     score1.innerText = "Player 1 had " + highScore1 + " points"
//     score2.innerText = "Player 2 had " + highScore2 + " points"
//     score3.innerText = "Player 3 had " + highScore3 + " points"
//     score4.innerText = "Player 4 had " + highScore4 + " points"
//     score5.innerText = "Player 5 had " + highScore5 + " points"
// });

// function debug(player, score) {

// }

// function currentPlayer() {

// }

// console.log(highScore1,
//     highScore2,
//     highScore3,
//     highScore4,
//     highScore5);
