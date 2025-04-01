let begin = 0;
let interval = null;
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
    if (interval) stop();
    interval = setInterval(timechange, 1000);

}

function stop() {
    clearInterval(interval)
}

function reset() {
    stop();
    begin = 0;
    settime();
}

