const CLOCK = document.querySelector(".js-clock");

function getCurTime() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  CLOCK.innerText = `${h > 9 ? h : `0${h}`}:${m > 9 ? m : `0${m}`}:${
    s > 9 ? s : `0${s}`
  }`;
}

function init() {
  getCurTime();
  setInterval(getCurTime, 1000);
}
init();
