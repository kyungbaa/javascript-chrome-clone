const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // String만 포함되어 있는 변수는 대문자로 표기하며 String을 저장하고자 할 때 사용한다.
const USERNAME_KEY = "username"; // localStorage에 저장될 컬럼명을 변수로 지정했음

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막는다.
  loginForm.classList.add(HIDDEN_CLASSNAME); // inform창에 hidden 클래스
  const username = loginInput.value; // username > inpunt 창에서 입력된 이름
  localStorage.setItem(USERNAME_KEY, username); //  USERNAME_KEY > localStorage에 저장될 컬럼명
  paintGreetings(sevedUserName);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // ` 백틱 ~랑 같이 있는 ` 백틱 백틱 ! 따옴표 아님!
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const sevedUserName = localStorage.getItem(USERNAME_KEY);

if (sevedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); // form의 hidden class 삭제하면 해당 폼이 표시된다.
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(sevedUserName);
}
