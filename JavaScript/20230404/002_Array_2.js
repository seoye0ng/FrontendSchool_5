// filter() : 기존의 배열에서 특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 만든다.
// true값인 것만 실행
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr1 = arr.filter(function (el) {
  return el % 2 === 0;
}); // 짝수 값 추출

const newArr2 = arr.filter(function (el) {
  return el % 2 !== 0;
}); // 홀수 값 추출

// 짝수의 합 구하기
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1) // 의미없는 값은 _를 사용하는게 관습
    .filter((v) => v % 2 === 0) // 짝수 값만 추출
    .reduce((a, c) => a + c, 0); // 추출한 값을 모두 더하기
}

// 모음만 제거하기
Array.from('hello world').filter((v) => !['a', 'e', 'i', 'o', 'u'].includes(v));

// reduce(축적되는 값, 현재값, 초기값)
const arr1 = [1, 2, 3, 4, 5, 6];
arr1.reduce((a, c) => a + c, 0); // 항상 초기값이 들어가야 한다(0), arr1에 값이 없다면 error가 난다

// min, max도 있는데 sum이 없다...

// includes
const arr2 = ['hello', 'world', 'internet'];
arr1.includes('world'); // true
arr1.includes('hi'); // false

// join
arr2.join('!'); // 'hello!world!internet'

const phoneNum = ['010', '2057', '9265'];
phoneNum.join('-');

const phoneNum2 = [010, 2057, 9265];
phoneNum.join('-'); // 이렇게 하면 안된다 // 8-2057-9265

//ob100 // b는 바이너리의 첫글자
//0o100 // o는 옥타의 첫글자
//0x100 // x는 헥사의 첫글자
