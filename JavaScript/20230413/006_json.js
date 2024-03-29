// - JSON.parse(): JSON문자열을 자바스크립트 객체로 변환(문자열 => 객체)
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환(객체 => 문자열)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);

const json1 = '[1, 2, 3]';
const obj1 = JSON.parse(json1);
console.log(obj1);

const json2 = '[1, 2, [1, 2, 3]]';
const obj2 = JSON.parse(json2);
console.log(obj2);

const json3 = { result: true, count: 42 };
const s = JSON.stringify(json3);
console.log(s);

// 깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);

// error
let ll = [10, 20, 30];
let a = JSON.parse(`${ll}`);
a[0] = 1000;

console.log(ll);
