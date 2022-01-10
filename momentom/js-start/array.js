/* 
conts로 선언한 array가 변경이 가능한 이유   

>
하나의 박스라고 생각해보자
const a = 2; 이렇게 있으면 a = 4; 이렇게 바꾸는건 안됩니다.
하지만 배열과 같은 경우에는 내용물 안의 요소들은 변경이 가능합니다.
이게 박스로 생각하면 const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; 이렇게 선언을 하면 이후에 daysOfWeek = ["hi"]; 이렇게 수정하는건 불가능합니다. 왜냐하면 박스 그 통째로 바꾸려고 하기 때문입니다.
하지만 그 박스 안의 내용물들을 추가하거나 삭제할 수는 있습니다.

 */

var arr = ["사과", "포도", "귤"]; // java 배열 초기화 방법 {1,2,3};
console.log(arr[0]); // 사과
console.log(arr.length); // 3

arr = []; // 초기화
arr[0] = "바나나";
arr[1] = "파인애플";
console.log(arr.length); // 2

// 배열 추가 push : 자바 스크립트는 가변 길이
arr.push("오렌지"); // 배열의 끝에 요소 오렌지 추가 arr[2] = 오렌지;
console.log(arr.length);
console.log(arr);

// 배열 제거 pop
var f = arr.pop(); // 배열 끝의 요소 제거  >> 변수 f에 배열 맨 끝의 요소 넣기
console.log(f); // 오렌지
console.log(arr); // [바나나, 파인애플 ]

// 배열의 앞에 요소 추가
arr.unshift("망고");
console.log(arr);
["망고", "바나나", "파인애플"];

// 배열의 앞에 요소 제거
f = arr.shift();
console.log(f); // 망고
console.log(arr); //  ['바나나', '파인애플']

// 인덱스 찾기
var index = arr.indexOf("파인애플"); //1
console.log(index);

index = arr.indexOf("두리안"); // -1 >> 배열에 두리안이 인덱스에 없을 경우

arr.push("수박");
arr.push("용과");
console.log(arr); // ['바나나', '파인애플', '수박', '용과']

// 배열 여러개 제거 특정 인덱스의 위치 요소 제거
var spliseArr = arr.splice(1, 2); //1번 인덱스부터 시작해서 두개의 요소를 제거한다.
console.log(arr);
["바나나", "용과"];
console.log(spliseArr);
["파인애플", "수박"];

for (var i = 0; i < arr.length; i++) {
  var element = arr[i];
  console.log(arr[i]);
}

// 0번 인덱스부터 끝까지의 반복시 forEach 권고 >> 스콥??
arr.forEach(function (element, i) {
  //         i >>0 <= i <= arr.length  i++ i의 0번 인덱스부터 i의 인덱스 만큼 반복 수행
  console.log(i + ":" + element);
});

// selection sort 오름차순 정렬
arr = [6, 1, 3, 2, 7, 4];
var temp;
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      // 1번 인덱스의 값이 0번 인덱스의 값보다 작은경우
      temp = arr[j]; // 비교해서 진 작은 수는 temp에 넣었다.
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[3]);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbap");
toBuy[2] = "water";
console.log(toBuy[2]);
console.log(toBuy[3]);

toBuy.push("snack");
console.log(toBuy);
console.log(toBuy.length);
