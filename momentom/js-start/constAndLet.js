/*변수만들때 let, const, var차이
let 재선언 금지, 재할당 가능
const 재선언 금지, 재할당 금지
var 재선언 가능, 재할당 가능*/

let a = b;
let a = c;
//재선언 금지

let a = b;
a = c;
//재할당은 가능

const a = b;
const a = c;
//재선언 금지

const a = b;
a = c;
//재할당 금지

var a = b;
var a = c;
a = d;
//재선언, 재할당 가능
