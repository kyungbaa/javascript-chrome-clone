const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODO_KEY = "todos";

let toDos = [];

// localStorage에 newToDo 저장하기
function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos)); //localStorage에는 String만 저장가능하기 때문에 JSON.stringify로 String형태로 바꿔서 todos(localStorage)에 저장
}

//3 list 삭제
function deleteToDo(event) {
  //  console.log(event);  event가 발생한 path를 알 수있다. 콘솔창 참조
  //console.log(event.target.parentElement.innerText); // parent node 확인가능 click의 target(클릭된 html)을 알 수 있음.
  const li = event.target.parentElement; // event.target.parentElement.innerText
  li.remove(); // target 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// 2. newToDo에 저장된 값 출력하기
function patintToDo(newToDo) {
  const li = document.createElement("li"); //html에 li 만들기
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "🚩";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span); // li 태그 안에 자식을 span 태그로 만든다. 특정 부모 밑에 자식 요소로 만들때 사용
  toDoList.appendChild(li);
}

// 1. to do list enter 이후 newToDo에 값 저장하기
function handleToDoSubmit(event) {
  event.preventDefault(); // 기본 이벤트를 막음 > 새로고침 방지
  const newToDo = toDoInput.value; // toDoInput 값이 지워지기 전 newToDo에 값 저장
  toDoInput.value = ""; // toDoInput 비우기
  const newToDoObj = {
    // 어떤걸 삭제할지 모르니까 각 newToDo에 Date.now()를 사용하여 ID부여
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); //newToDo할때마다 array push
  patintToDo(newToDoObj); // paintToDO를 호출 (인자값:newToDo)
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // 각 개별 array에 function실행시키
  parsedToDos.forEach(patintToDo);
}
