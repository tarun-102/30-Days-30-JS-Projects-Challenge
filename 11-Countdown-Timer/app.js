const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const display = document.querySelector('#display');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let totalSeconds = 0;
let timer;
let isRunning = false;

const updateDisplay = () => {
    let h = Math.floor(totalSeconds / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    let hh = h < 10 ? '0' + h : h;
    let mm = m < 10 ? '0' + m : m;
    let ss = s < 10 ? '0' + s : s;

    display.innerText = `${hh}:${mm}:${ss}`;
};

const startTimer = () => {
    if (isRunning) return;

    if (totalSeconds === 0) {
        let h = parseInt(hour.value) || 0;
        let m = parseInt(minute.value) || 0;
        let s = parseInt(second.value) || 0;
        totalSeconds = h * 3600 + m * 60 + s;
    }

    if (totalSeconds <= 0) return;

    isRunning = true;

    timer = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            updateDisplay();
            let beep = new Audio("https://www.soundjay.com/buttons/sounds/beep-07.mp3");
            beep.play();
            alert("⏰ Time's up!");
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timer);
    isRunning = false;
};

const resetTimer = () => {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
    hour.value = "";
    minute.value = "";
    second.value = "";
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
