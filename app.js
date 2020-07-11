min = 0;
sec = 0;
msec = 0;
var minDisplay = document.getElementById("min");
var secDisplay = document.getElementById("sec");
var msecDisplay = document.getElementById("msec");
var interval;

function timer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        secDisplay.innerHTML = sec;
        msec++;
        if (sec == 60) {
            sec = 0;
            min++;
            minDisplay.innerHTML = min;

        }
        secDisplay.innerHTML = sec;
    }
    msecDisplay.innerHTML = msec;
}

var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");


function start() {
    interval = setInterval(timer, 10)
    startBtn.className = "hidden";
    pauseBtn.className = "";
    stopBtn.className = "";
}

function pause() {
    clearInterval(interval)
    startBtn.className = "";
    pauseBtn.className = "hidden";
    stopBtn.className = "";
}

function stop() {
    clearInterval(interval)
    min = 0;
    sec = 0;
    msec = 0;
    minDisplay.innerHTML = 0;
    secDisplay.innerHTML = 0;
    msecDisplay.innerHTML = 0;
    startBtn.className = "";
    pauseBtn.className = "hidden";
    stopBtn.className = "hidden";
}