let divTimer = document.getElementById('timer');
divTimer.innerHTML = '0.00.00';
let currentTime = 0;
let countOfSeconds = 0;

let flag = true;

let timer;
let startTimer = function () {
    let time = performance.now();
    flag = !flag;
    timer = setInterval(function () {
        countOfSeconds = (parseInt(performance.now() - time) / 1000 +currentTime).toFixed(2);
        divTimer.innerHTML = `${parseInt(countOfSeconds/60)}.${(countOfSeconds % 60).toFixed(2) < 10 ? '0'+(countOfSeconds % 60).toFixed(2):(countOfSeconds % 60).toFixed(2) ? (countOfSeconds % 60).toFixed(2) < 10 ? '0'+(countOfSeconds % 60).toFixed(2):(countOfSeconds % 60).toFixed(2) : countOfSeconds}`;
    },1);
};

let stopTimer = function(seconds){
    flag = !flag;
    clearInterval(timer);
    currentTime = +countOfSeconds;
};

document.getElementById('button-stop').onclick = function(){
    if(flag){
        document.getElementById('button-stop').innerHTML = 'PAUSE';
        startTimer();
    } else {
        stopTimer();
        document.getElementById('button-stop').innerHTML = 'START';
    }
};

document.getElementById('button-clear').onclick = function () {
    stopTimer();
    flag = true;
    document.getElementById('button-stop').innerHTML = 'START';
    let divTimer = document.getElementById('timer');
    divTimer.innerHTML = '0.00.00';
    currentTime = 0;
};
