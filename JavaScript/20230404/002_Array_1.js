// arr(*****)
const arr = [10, 20, 30];
arr[0] = 100; // const는 값의 변화가 안된다고 하지 않았나? 변경가능 (mutable)
// arr = 100
// arr = [10, 20, 30]
console.log(arr);
console.dir(arr); // 프러퍼티와 메서를 볼 수 있습니다.

// 문자열(string)
const str = 'hello world';
console.log(s[0]);
s[0] = 'i'; // 문자열은 불변이라 불가능 (immutable)

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을찍어서 호출할 수 있습니다.
arr[1];
arr.length;
arr['length'];

// 두개가 같은 얘기 -> 둘다 안에 있는 값을 변경시키는 것
arr.length = 10;
arr[0] = 100;

// 프로퍼티를 추가하는 것도 가능합니다.
arr['leehojun'] = 100;
arr.hojun = 1000;

// 배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0)

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 합니다. 배열 안에 값을 원소(elements)라고 합니다.
const arr = [10, 20, 30];
arr[0] = 100;

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr[0];
// [1, 2, 3]
arr[1];
// [4, 5, 6]
arr[2];
// [7, 8, 9]
arr[1][2];
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.

// push -----
const arr = [1, 2, 3];
arr.push(4);
// 배열의 끝에 요소를 추가

// push 실무 예제
// let tableBodyData = [];
// for (const iterator of data) {
//   tableBodyData.push(`
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `);
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('');

// pop -----
const arr = [1, 2, 3, 4, 5];
arr.pop();
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return)
// 5
arr;
// (4) [1, 2, 3, 4]

// unshift -----
const myArray1 = ['사과', '바나나', '수박'];
myArray1.unshift('오이', '배');
console.log(myArray1);
// 배열의 첫 번째 요소로 새로운 요소를 추가

// shift -----
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return)
const myArray2 = ['사과', '바나나', '수박'];
// myArray2.shift();
// console.log(myArray2);

let firstValue = myArray2.shift();
firstValue; // 사과

// 문제(*****) -----
// pop, shift, unshift, push에 대해 설명해주세요.
// push - 배열의 뒤에 값을 추가
// pop - 뒤에서 값을 꺼내고 반환
// unshift - 배열의 앞에 값을 추가
// shift - 앞에서 값을 꺼내고 반환

// arr.splice(start, deleteCount, items) -----
// 배열의 요소를 추가, 제거 또는 교체
let arr = [1, 2, 3];

arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다. // [1, 10, 20, 30, 2, 3]

arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다. // [1, 10, 20, 30, 2, 3]

// 문제 -----
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(1); // start값만 지정하면 마지막 인덱스 값까지 삭제 // [20, 30, 40, 50]
console.log(arr); // [10]

// arr.slice(start, end) -----
const myArray = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
console.log(myArray.slice(1, 4)); // ['banana', 'cherry', 'durian']
console.log(myArray); //['apple', 'banana', 'cherry', 'durian', 'elderberry']
// 원본 배열은 그대로 살아있다
console.log(myArray.slice(1)); //['banana', 'cherry', 'durian', 'elderberry']
console.log(myArray.slice(0, 100)); // 처음부터 끝까지 다 잘라낸다

// forEach -----
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[]
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (item, index) {
  console.log(item);
}); // 1 // 2 // 3 // 4 // 5

arr.forEach(function (item, index) {
  console.log(index, item);
  console.log('hello'); // 0 1 hello // ...
});

arr.forEach(function (item, index, arr) {
  console.log(index, item, arr);
  console.log('hello'); // 0 1 [1, 2, 3, 4, 5] hello // ...
});

// forEach +
const arr = Array(100).fill(0);
const arr2 = [];

// arr.forEach(function (item, index) {
//   arr2.push(index);
// });

// 같은 코드 1
// arr.forEach(function(item, index){
//     arr2.push(index+1)
// })

// 같은 코드 2
// arr.forEach((item, index) => {
//     arr2.push(index+1)
// })

// 같은 코드 3(주로 이렇게 실무에서 사용)
arr.forEach((item, index) => arr2.push(index + 1));

// 같은 코드 4(이렇게는 사용하지 X)
// function result(item, index) {
//   arr2.push(index + 1);
// }
// arr.forEach(result);

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];
const newAvengers = [];
avengers.forEach(function (item) {
  newAvengers.push('💖' + item + '💖');
}); // [💖spiderman💖, 💖ironman💖,💖hulk💖,💖thor💖]

// map -----
// 면접 질문에서도 많이 나온다. 데이터를 뽑으려고 많이 사용한다.
// map은 forEach와 다르게 새로운 배열을 생성한다.
const arr = [1, 2, 3];

arr.map(function (item, index) {
  return item ** 2;
});

arr.map(function (x) {
  return x ** 2;
});

arr.map((x) => x ** 2);

// 같은 코드 1
const arr = Array(100).fill(0);
arr.map((v, i) => i);

// 같은 코드 2
const arr = Array(100).fill(0);
arr.map(function (v, i) {
  return i;
});

// 같은 코드 3
const arr = Array(100).fill(0);
function hojun(v, i) {
  return i;
}
arr.map(hojun);

// 같은 코드 4
const arr = Array(100).fill(0);
arr.map((v, i) => {
  return i;
});

////////////////////////////

// 실무 팁 --------------------------------
let tip1 = [1, 2, 3, 4, 5];
console.log(tip1[tip1.length - 1]); // 5
// 원본 수정 없이 [5] 라는 값을 얻어내고 싶을 때
console.log([...tip1].pop());

// 원본 수정 없이 [1, 2, 3, 4] 값과 [5] 라는 값을 얻어내고 싶을 때
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2);

//두 배열을 합치면서 중간에 값을 껴넣고 싶을 때
let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]);

// 다차원 배열에서 최솟값, 최댓값 찾기
let tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

Math.max(...tip5.flat()); // flat은 안의 배열 하나를 벗겨준다

// 베열 펼치기
const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼치면 스톱

// 0으로 채워진 새로운 배열을 만들고 싶을 때
const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 된다.

// 문자열을 배열로 변환하고 싶을 때
const tip8 = Array.from('hello world'); // ['h', 'e','l', 'l', 'o',' ', 'w', 'o', 'r', 'l', 'd']

// 배열을 slice하여 중간에 값 넣기
let tip9 = [1, 2, 3, 4, 5];
console.log(tip9.slice(0, 2), 1000, tip9.slice(2, 5)); // [Array(2), 1000, Array(3)]
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]); // [1, 2, 1000, 3, 4, 5]

// tip9를 splice를 사용해 더 간단하게
let tip10 = [1, 2, 3, 4, 5];
console.log(tip10.splice(2, 0, 1000));
console.log(tip10);

// 0부터 100까지 배열로 변환하기
const tip11 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

//
const tip12 = [
  {
    _id: '642ba3980785cecff3f39a8d',
    index: 0,
    age: 28,
    eyeColor: 'green',
    name: 'Annette Middleton',
    gender: 'female',
    company: 'KINETICA',
  },
  {
    _id: '642ba398d0fed6e17f2f50c9',
    index: 1,
    age: 37,
    eyeColor: 'green',
    name: 'Kidd Roman',
    gender: 'male',
    company: 'AUSTECH',
  },
  {
    _id: '642ba39827d809511d00dd8d',
    index: 2,
    age: 39,
    eyeColor: 'brown',
    name: 'Best Ratliff',
    gender: 'male',
    company: 'PRISMATIC',
  },
];

const ages1 = tip12.map((item) => item.age); // [28, 37, 39]
const ages2 = tip12.map((item) => {
  return item.age;
}); // [28, 37, 39]

console.log(ages1, ages2);
