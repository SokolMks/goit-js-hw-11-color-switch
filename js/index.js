const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs ={
  startBtn: document.querySelector('[data-action = "start"]'),
  stopBtn: document.querySelector('[data-action = "stop"]'),
  bodyColor: document.querySelector('body'),
};
refs.stopBtn.disabled = true;


refs.startBtn.addEventListener('click', buttonPress);
refs.stopBtn.addEventListener('click', buttonPress);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
    refs.bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

let startChanging;
function buttonPress(event) {
  console.log(event.target.textContent);
  if (event.target.textContent === "Start") {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    startChanging = setInterval(changeColor, 1000);
  } else {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    clearInterval(startChanging);
  }
}
