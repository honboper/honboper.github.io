const TODOS_LS = "toDos";
const ul = document.querySelector(".js-toDoList");
const form = document.querySelector(".js-toDoForm");
const input = form.querySelector("input");

toDos = [];

function deleteToDo(event) {
  const delTarget = event.target.parentElement;
  const id = delTarget.id;
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(id);
  });
  delTarget.remove();
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDos(text) {
  // const li = ul.appendChild("li");
  const newId = toDos.length + 1;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  ul.appendChild(li);
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  ul.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const userInput = input.value;
  paintToDos(userInput);
  input.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handleToDoSubmit);
}

init();
