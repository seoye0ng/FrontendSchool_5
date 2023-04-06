for (let i = 0; i < 10; i++) {
  console.log(10);
}

const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
const arr1 = [10, 20, 30, 40, 50];
const obj1 = { one: 10, two: 20 };

for (const i in arr1) {
  console.log(arr1[i]); // i가 index를 가져온다. 이때 i는 문자열이다.(숫자아님)
} // 10 20 30 40 50

for (const i in obj1) {
  console.log(obj1[i]); // i가 key를 가져온다.
} // 10 20

// 100까지 더하기 (문자열을 순회해서)
let s = 0;
for (const i in '.'.repeat(101)) {
  s += parseInt(i);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 불가능
// 개발자의 행복을 위해서 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있다
const arr2 = [10, 20, 30, 40, 50];
const obj2 = { one: 10, two: 20 };

for (const item of arr2) {
  console.log(item); // item이 배열 요소값을 가져온다.
} // 10 20 30 40 50

let ss = 0;
for (const item of arr2) {
  ss += item;
} // 150

for (const item of obj2) {
  // of 뒤에 iterable한 값이 나와야 순회가능하다.
  console.log(item);
}

for (const item of 'hello world') {
  console.log(item);
} // 배열 요소의 값을 하나씩 출력

/// why? for of와 for in문에서는 const가 가능한가요? - 그냥 명세서에서 const 쓰라해서 const로 쓰는거
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
  console.log(10);
} // error

{
  const x = 10;
  console.log(x);
}
console.log(x); // error

for (const i in [1, 2, 3]) {
  console.log(i);
}

for (const i of [1, 2, 3]) {
  console.log(i);
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

// 같은 코드1
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]);
  console.log(s[i + 1] - s[i]);
}
// 같은 코드2
for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]);
  console.log(s[i] - s[i - 1]);
}

///

// 문제
// 다음 수학 점수의 평균을 구하세요.
const 수학점수 = [10, 99, 89, 70];
// step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length;

// step2
let total = 0;
for (let i = 0; i < s.length; i++) {
  total += 수학점수[i];
}
console.log(total / 수학점수.length);

// step3
let totalScore = 0;
for (const score of 수학점수) {
  totalScore += score;
}
console.log(totalScore / 수학점수.length);

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: '642e3071c61a23c70ae6076b',
    index: 0,
    age: 31,
    name: 'Hicks Garza',
    gender: 'male',
  },
  {
    _id: '642e3071ecd6f90a87d64731',
    index: 1,
    age: 32,
    name: 'Ayers Harrington',
    gender: 'male',
  },
  {
    _id: '642e3071cef9ddc131f047fb',
    index: 2,
    age: 39,
    name: 'Lamb Adams',
    gender: 'male',
  },
];
// 내풀이
let totalAge = 0;
for (const i in user) {
  totalAge += user[i].age;
}
console.log(totalAge / user.length);

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

// 풀이 1
let x = 0;
for (let i = 0; i < user.length; i++) {
  x += user[i]['age'];
}
console.log((x / user.length).toFixed(2));

// 풀이 2
let y = 0;
for (let i of user) {
  y += i.age;
}
console.log((y / user.length).toFixed(2));

// 풀이 3
let z = 0;
for (let i in user) {
  z += user[i].age;
}
console.log((z / user.length).toFixed(2));

//////////// 심화 수업 ////////////
let user2 = [
  {
    _id: '642e3071c61a23c70ae6076b',
    index: 0,
    age: 31,
    name: 'Hicks Garza',
    gender: 'male',
  },
  {
    _id: '642e3071ecd6f90a87d64731',
    index: 1,
    age: 32,
    name: 'Ayers Harrington',
    gender: 'male',
  },
  {
    _id: '642e3071cef9ddc131f047fb',
    index: 2,
    name: 'Lamb Adams',
    gender: 'male',
  },
];
/// 이건 안되는 코드
let yy = 0;
for (let i of user2) {
  console.log(i);
  console.log(i.age); // 마지막 undefined
  console.log(s); // 마지막 102
  console.log('----------');
  yy += i.age; // 마지막 undefined + 102
}
console.log((yy / user2.length).toFixed(2));

/// 1
let yyy = 0;
for (let i of user2) {
  console.log(i);
  console.log(i.age); // 마지막 undefined
  console.log(s); // 마지막 102
  console.log('----------');
  yyy += i.age ?? 0;
}
console.log((yyy / user2.length).toFixed(2));

/// 2
let yyyy = 0;
for (const i of user2.map((v) => v.age)) {
  if (!!i) {
    yyyy += i;
  } // age에 undefined가 있다면 더해주지 않겠다
}
console.log((yyyy / user2.length).toFixed(2));

/////
!true; // false
!false; // true
!!10; // true
!!1; // true
!!-1; // true
!!0; // false
!!'hello'; // true
!!NaN; // false
!!undefined; // false
!!null; // false

////// 외울 코드 /////
user2
  .map((v) => v.age) // age값을 뽑는다
  .filter((v) => !!v) // 값이 없다면 거른다
  .reduce((a, b) => a + b, 0); // 뽑은 값들을 더한다
