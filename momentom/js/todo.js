const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// toDo 저장 리스트 array
const toDos = [];

// toDosArray의 내용을 localStorange에 넣기
function saveTodos() {
  localStorage.setItem("todo", toDos);
}

function deleteTodo(event) {
  const li = event.target.parentElement; // 클릭한 버튼의 부모 찾기
  li.remove(); // 찾은 list 삭제
}

// todo list 만들기
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = newTodo;
  const button = document.createElement("button");
  button.innerText = "🚩";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); // newTodo를 toDos list에 추가
  paintToDo(newTodo);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
