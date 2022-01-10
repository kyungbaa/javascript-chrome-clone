// funtion 내가 계속해서 반복 사용할 수 있는 코드 조각
// 코드를 캡슐화해서 여러번 실행 할 수 있게 해준다.
//funtion 실행 : 함수명();
// argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안 어떤 정보를 함수에게 보낼 수 있는 방법이다.
function sayHello() {
  console.log("Hello! my name is");
}

sayHello("Dal"); // Hello! my name is Dal 이렇게 만들고 싶은데...

// alert(); 내용이 없는 알림창이 뜬다.  alert("Hi");  Hi 알림창
// console.log(); consol창에 아무것도 출력되지 않는다. console.log("안녕"); consol 창에 안녕 출력

function sayHello(nameOfPoeson, age) {
  console.log("Hello! my name is " + nameOfPoeson + "and I'm " + age);
}

sayHello("Dal", 22);
sayHello("Kbaa", 10);
sayHello("Hera", 44);

function plus(a, b) {
  console.log(a + b);
}

// plus(); //NaN Not a Number
plus(343, 209);

function divide(firstNo, sccondNum) {
  console.log(firstNo / sccondNum);
}
divide(100, 10);

const player = {
  name: "Kyung Baa",
  sayHello: function (otherPensonsName) {
    console.log("hello! " + otherPensonsName + " Nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("Lynn");
player.sayHello("Kyung Ba");

function plus(a, b) {
  console.log(a + b);
}

plus(34, 53);

function minusFive(potato) {
  console.log(potato - 5);
}
minusFive(100);
minusFive(5, 6, 7, 8, 9, 10); // 많은 argument를 보내더라도 문제되지 않는다. 제일 앞의 값이 적용된다.

// 더하기 빼기 나누기 곱하기 제곱
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  devide: function (a, b) {
    console.log(a / b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  square: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(20, 34);
calculator.minus(200, 32);
calculator.devide(300, 30);
calculator.multiply(23, 53);
calculator.square(3, 3);
