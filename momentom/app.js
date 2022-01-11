const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; // String만 포함되어 있는 변수는 대푼자로 표기하며 String을 저장하고자 할 때 사용한다.

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막는다.
  //const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); // inform창에 hidden 클래스
  const userName = loginInput.value;
  //greeting.innerText = "Hello " + userName;
  greeting.innerText = `Hello ${userName}`; // ` 백틱 ~랑 같이 있는 ` 백틱 백틱 ! 따옴표 아님!
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
