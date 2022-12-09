//Gobal Variables
let transactionNum = 10;
let buyStack = [];
let globalScore = 0;
let timerValue = 60;
let currentBTCValue = 0;
let counter = 0;
let BTCdata = [];
//Timing
let timerHandle;


const buyButton = document.getElementById('buy');
const sellButton = document.getElementById('sell');
const transactions = document.getElementById('transactions');
const buyStackLbl = document.getElementById('buyStack');
const scoreLbl = document.getElementById('scoreLbl');
const currentValueLbl = document.getElementById('currentValue');
const timerLbl = document.getElementById('timerLbl');
const infoLbl = document.getElementById('infoLbl');

let isPlaying = false;

let Initialize = () => {
    transactionNum = 10;
    buyStack = [];
    timerValue = 60;
    currentBTCValue = 0;
    transactions.innerText = '10';
    buyStackLbl.innerText = '0';
    scoreLbl.innerText = '0';
    timerLbl.innerText = '60';
    console.log('Init Values');
}
Initialize();
// debug 
const startBtn = document.getElementById('start');
startBtn.addEventListener('click',  () => {
    startGame();
})
// end debug
const showModal = () => {
   let modal = document.getElementById('modalScore');
   const modalClose = document.getElementById('modalClose');
   const modalIntButton = document.getElementById('modalIntButton');
   const scoreH3 = document.getElementById('scoreH3');
   modalClose.addEventListener('click', () => {
    modal.classList.toggle('is-active');
   });

   scoreH3.innerText = `Your score was ${globalScore}`;
   modal.classList.toggle('is-active');

}
let getCurrent = () => {
    counter++;
    currentBTCValue = BTCdata[counter][1];
    currentValueLbl.innerText = currentBTCValue;
    let tmpTimerValue = parseInt(timerLbl.innerText);
    tmpTimerValue--;
    timerLbl.innerText = tmpTimerValue;
    //console.log(counter);
    if (counter >= 59) {
        console.log('Timer Stopped');
        timerLbl.innerText = '0';
        isPlaying = false;
        clearInterval(timerHandle);
        window.localStorage.setItem('currentUser', globalScore);
        showModal();
    }
}

let startGame = () => {
    startBtn.disabled = true;
    BTCdata = [];
    let d = new Date();
    let randomDay = Math.floor(Math.random() * (365 - 180)) + 180;
    let queryTime = (new Date(d.getTime() - (1000 * 60 * 60 * 24 * randomDay))).toISOString();
    console.log(queryTime);
    const restString = `https://rest.coinapi.io/v1/exchangerate/BTC/USD/history?apikey=57923E85-C62F-4741-8574-F41C943B13B4&period_id=15MIN&time_start=${queryTime}&limit=60`;
    fetch(restString)
        .then( (res) => {
            return res.json();
        })
        .then( (data) => {
            console.log(data);
            data.forEach( (element, index) => {
                //console.log(element.rate_close);
                BTCdata[index] = [index, element.rate_close];
            });
        })
        .then( () => {
            console.log(BTCdata);
            let dataSet = anychart.data.set(BTCdata);
            let BTCDataMap = dataSet.mapAs({x: 0, value: 1});
            let chart = anychart.line();
            let BTCLine = chart.line(BTCDataMap);
            BTCLine.name("BTC");
            let animationSettings = chart.animation();
            animationSettings.duration(60000);
            animationSettings.enabled(true);
            chart.legend().enabled(true);
            chart.title("Whatacrypto Game");
            chart.container("game");
            chart.draw();
            isPlaying = true;
            timerHandle = setInterval(getCurrent, 1000);
            
        })
        .catch( (e) => {
            console.log(e);
        })
    
}

buyButton.addEventListener('click', () => {
    // Guard against modifying values while not playing
    if (!isPlaying) {
        console.log('Not Playing');
        infoLbl.innerText = 'Not Playing';
        //Displays error message to user for only two seconds
        setTimeout( () => {
            infoLbl.innerText = '';
        }, 2000);
        return;
    }
    if (transactionNum <= 0) {
        console.log('Out of Transactions');
        infoLbl.innerText = 'Out of Transactions';
        //Displays error message to user for only two seconds
        setTimeout( () => {
            infoLbl.innerText = '';
        }, 2000);
        return;
    }
    if (transactionNum > 0) {
        transactionNum--;
        transactions.innerText = transactionNum;
        buyStack.push(currentBTCValue);
        console.log(`Buy Stack: ${buyStack}`);
        buyStackLbl.innerText = buyStack.length;
    }
    
});

sellButton.addEventListener('click', () => {
    //Guard against using while not playing
    if (!isPlaying) {
        console.log('Not Playing');
        infoLbl.innerText = 'Not Playing';
        //Displays error message to user for only two seconds
        setTimeout( () => {
            infoLbl.innerText = '';
        }, 2000);
        return;
    }
    if (buyStack.length <= 0) {
        console.log('You do not have Buys stacked up');
        infoLbl.innerText = 'You do not have Buys stacked up';
        //Displays error message to user for only two seconds
        setTimeout( () => {
            infoLbl.innerText = '';
        }, 2000);
        return;
    }
    let prevValue = buyStack.pop();
    buyStackLbl.innerText = buyStack.length;
    //console.log(prevValue);
    let tmpScore = currentBTCValue - prevValue;
    globalScore = globalScore + tmpScore;
    scoreLbl.innerText = globalScore;
});