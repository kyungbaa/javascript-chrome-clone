/*const h1 = document.getElementById("h1");

h1.innerText = "Got you";
console.log(h1.id);
console.log(h1.className);
*/

/*
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
*/

/*

classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
className은 이전calss를 상관하지않고 모든걸 교체해 버린다.

classList를 이용하는건
js에서 건드리는건 HTML element가 가지고있는 또하나의 요소 사용하는 것이다.
= element의 class내용물을 조작하는 것을 허용한다는 뜻

contains은 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다

toggle은 토큰이 존재하면 토큰제거
토큰존재 하지않으면 토큰 추가

*/

/*
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  const clickedClass = "clicked";
  // clickedclass가  h1의 classList에 포함되어있다면
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick);
*/

// toggle
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
