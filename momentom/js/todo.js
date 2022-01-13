const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// toDo 저장 리스트 array
const toDos = [];

// toDosArray의 내용을 localStorange에 넣기
function saveToDos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos));
}
//json.stringify > 나중에 json.parse 함수를 사용하기 때문임.
//(STRINGIFY = 변수 등을 문자열로 바꿈, PARSE = 문자열을 JSON으로 바꿈)

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
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
/*
localStorage.getItem("todos");
>> '["1","2","3","4"]' 단순한 String 형태
JSON.parse(localStorage.getItem("todos"));
>> (4) ['1', '2', '3', '4'] String을 배열로 바꿈
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}
