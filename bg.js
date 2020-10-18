const body = document.querySelector("body");
const randomNumber = Math.floor(Math.random() * 4) + 1;

function paintBackground() {
  body.style.background = `url('src/${randomNumber}.jpg') no-repeat center fixed`;
  body.style.backgroundSize = "cover";
}

function init() {
  paintBackground();
}

init();
