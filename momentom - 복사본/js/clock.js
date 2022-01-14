const clock = document.querySelector("h2#clock");

/*function sayHello() {
  console.log("Say hello");
}

    setInterval(sayHello, 5000); 5초마다 반복
    setTimeout(sayHello, 5000); 5초 뒤에 한번 실행
*/

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const miutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${miutes}:${seconds}`;
}
getClock(); // 1초가 지나야만 시간을 가져오게 되므로 바로 웹사이트 로드 후 바로 시작되는 시간도 표기해야함.
setInterval(getClock, 1000); // 1초마다 getClock
