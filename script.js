let startTime;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);

  return (
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0")
  );
}

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  laps.innerHTML = "";
}

function recordLap() {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);