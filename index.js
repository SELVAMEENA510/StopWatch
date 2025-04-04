let begin = 0;
let interval = null;
let isPaused = false;
let timer = document.getElementById("time");

function padStart(value) {
    return String(value).padStart(2, "0");
}

function settime() {
    const min = Math.floor(begin / 60);
    const sec = begin % 60;
    timer.innerHTML = `${padStart(min)}:${padStart(sec)}`
}

function timechange() {
    begin++;
    settime();
}

function start() {
    if (interval==null);
    interval = setInterval(timechange, 1000);
    isPaused = false;
    updatePauseButton("Pause");

}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    begin = 0;
    settime();
    updatePauseButton("Pause");
}

function pauseResume() {
    if (interval) {
        clearInterval(interval);
        interval = null;
        isPaused = true;
        updatePauseButton("Resume");
    } else if (isPaused) {

        interval = setInterval(timechange, 1000);
        isPaused = true;
        updatePauseButton("Pause");
    }
}

function updatePauseButton(text) {
    const pauseBtn = document.querySelector('button[onclick="pauseResume()"]');
    if (pauseBtn) pauseBtn.textContent = text;
}

