function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;
const bodyColor = document.body.style;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyColor.backgroundColor = randomColor;
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
