const age = parseInt(prompt("How old are you?"));

// console.log(typeof age); //  typeof : 입력값의 타입을 확인할 수 있음
// console.log(typeof "22", typeof parseInt("15"));
// console.log(typeof "22", typeof 13);

// console.log(isNaN(age)); // isNaN > bollean 참 거짓 여부를 알려준다.

if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
  if (age < 18) {
    console.log("You are too yung");
  } else if (age >= 18 && age <= 99) {
    console.log("You can drink");
  }
}
