const calculator = {
  add: function (a, b) {
    console.log("hello"); // 콘솔창에 출력
    return a + b;
    // 한번 return하면 function은 멈춘다.
    console.log("bye bye"); // bye bye가 콘솔창에 출력되지 않는다.
  },
  minus: function (a, b) {
    return a - b;
  },
  devide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiplyResult = calculator.multiply(3, minusResult);
const devideResult = calculator.devide(39, multiplyResult);
const powerOfResult = calculator.powerOf(devideResult, plusResult);
plusResult;
const age = 96;
function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);
console.log(krAge);
