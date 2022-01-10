/*
const playereName = "kyungBa";
const playerPoints = 121212;
const plyerHandsome = true;
const plyerFat = "little bit";


// player [0] == name
// player [1] == points
const player = ["kyungBa", 121212, true, "little bit"];

*/

//object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.
const player = {
  name: "Kyung Baa",
  points: 10,
  handsome: true,
  fat: "little bit",
};
console.log(player);

//property를 불러오는 방법은 2가지가 있다.
console.log(player.name);
console.log(player["name"]);
console.log(player);
/*
또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.
ex)
const player = {
name : tomato,
color : red,
food : true,
};
*/
player.handsome = false; //속성값 수정
player.points = player.points + 2;
player.lastName = "potato"; // 속성값 추가
console.log(player);
// ** const는 let과 다르게 update가 안되지만 리스트의 경우 전체를 변경하는 게 아니라 속성값을 수정/추가하는 경우에는 update 가 가능하다
