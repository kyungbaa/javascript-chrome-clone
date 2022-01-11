/*const h1 = document.getElementById("h1");

h1.innerText = "Got you";
console.log(h1.id);
console.log(h1.className);
*/

const h1 = document.querySelector("div.hello:first-child h1");

h1.innerText = "Hell0o0o!";
h1.style.color = "white";

function handleh1Click() {
  h1.innerText = ">_<";
  console.log("h1 was clicked!");
}

function handleMousenter() {
  h1.innerText = "Mouse is Here! : )";
}
function handleMouseLeave() {
  h1.innerText = "Mouse is Gone! : (";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
  alert("copppppy!!");
}

function handleWindowOffline() {
  alert("SOO no WIFI!!");
}

function handleWindowONline() {
  alert("ALL Goooood!!");
}

h1.addEventListener("click", handleh1Click);
//h1.onclick = handleh1Click;
h1.addEventListener("mouseenter", handleMousenter);
//h1.onmouseenter = handleMousenter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowONline);
