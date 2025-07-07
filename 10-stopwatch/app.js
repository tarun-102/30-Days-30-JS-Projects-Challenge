const display = document.querySelector('.display span');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const updateDisplay = () => {
    let h = hours < 10 ? '0' + hours : hours
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    display.textContent = `${h}:${m}:${s}`;
}

const startTimer = () => {
    if(!isRunning){
        isRunning = true;
        timer = setInterval(() =>{
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minutes++
            }
            if(minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        } ,1000)
    } 
}

const stopTimer = () => {
    isRunning = false;
    clearInterval(timer);
}

const resetTimer = () => {
    isRunning = false;
    clearInterval(timer)
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay()
}

startBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', startTimer)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)

