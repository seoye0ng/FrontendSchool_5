// boolean ****

let x = 5;
let y = 19;

console.log(x > y); // false

// true, false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;

console.log(a && b); // false

// true, false 값을 and, or 연산했을 경우 단락회로평가를 한다.
let a2 = 'hello';
let b2 = '';

console.log(a2 && b2); // '' 그냥 빈 문자열 출력

// 값이 있으면 t, 없으면 f (0은 f)
console.log(Boolean('hello')); // t
console.log(Boolean('')); // f (아무것도 없는 빈 문자열은 false)
console.log(Boolean([1, 2, 3])); // t
console.log(Boolean([])); // t (말도 안되게 true...)
console.log(Boolean({ one: 10, two: 20 })); // t
console.log(Boolean({})); // t (말도 안되게 true...)
console.log(Boolean(0)); // f
console.log(Boolean(-1)); // t
console.log(Boolean(undefined)); // f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f

if (undefined) {
  console.log('hello'); // 출력 X
}

let abc;
if (abc) {
  console.log('hello'); // 출력 X
}

// 답할 수 있어야 견고한 코드를 짤 수 있다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let abcd;
if (abcd > 100) {
  console.log('hello'); // 출력 X
}
