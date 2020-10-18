const greeting = document.querySelector(".js-greeting"),
  nameForm = document.querySelector(".js-form"),
  inputName = nameForm.querySelector("input"),
  toDoForm = document.querySelector(".js-toDoForm");
const SHOWING_CN = "showing",
  USER_LS = "userName";

function handleSubmit(event) {
  event.preventDefault();
  const currName = inputName.value;
  localStorage.setItem(USER_LS, currName);
  nameForm.classList.remove(SHOWING_CN);
  paintGreeting();
}

function paintGreeting() {
  const userName = localStorage.getItem(USER_LS);
  const currentTime = new Date().getHours();
  let greet = null;

  if (currentTime > 21 || currentTime <= 4) {
    greet = "Good night ";
  } else if (currentTime > 17) {
    greet = "Good evening ";
  } else if (currentTime > 12) {
    greet = "Good afternoon ";
  } else if (currentTime > 4) {
    greet = "Good morning ";
  }

  if (userName) {
    greeting.innerText = `${greet}${userName}!`;
    greeting.classList.add(SHOWING_CN);
    toDoForm.classList.add(SHOWING_CN);
  } else {
    nameForm.classList.add(SHOWING_CN);
  }
}

function init() {
  nameForm.addEventListener("submit", handleSubmit);
  paintGreeting();
}
init();
