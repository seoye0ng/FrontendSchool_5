// set
// 집합, 합집합, 교집합, 차집합, 여집합
// 실무에서는 많이 사용 안되지만 알고리즘 문제에서는 거의 필수로 사용되는 자료형

let s = new Set('aabbbcccddd'); // {'a', 'b', 'c', 'd'} 중복을 제거
s.size; // 4

/// 문제 ///
// 문제 1 : 몇 명이 게시판에 게시물을 썻는가?
회사게시판 = ['뽀로로', '뽀로로', '뽀로로', '뽀로로', '뽀로로', '크롱', '크롱', '크롱', '포비', '포비', '에디', '루피'];
let 게시자 = new Set(회사게시판); //{'뽀로로','크롱','포비','에디','루피'}
게사자.size; // 5명

// 문제 2 : 각각 몇 개의 게시물을 작성하였나?
for (const i of 게시자) {
  console.log(
    i,
    회사게시판.filter((e) => e === i)
  );
} //['뽀로로', '뽀로로', '뽀로로', '뽀로로', '뽀로로'] ['크롱', '크롱', '크롱'] ['포비', '포비'] ['에디'] ['루피']

for (const i of 게시자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
} // 뽀로로 5 크롱 3 포비 2 에디 1 루피 1

// 초급자 분들에게 권장하지 않는 어려운 풀이
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1);
} // {'뽀로로' => 5, '크롱' => 3, '포비' => 2, '에디' => 1, '루피' => 1}

// 1번째 순회 i에 '뽀로로'
map.set(i, (map.get(i) || 0) + 1);

let map = new Map();
map.get('뽀로로'); // undefined => map.get(i) || 0 에서 0이 되고, +1을 해줌
map.set('뽀로로', 1); // 결과

// 2번째 순회 i에 '뽀로로'
map.set(i, (map.get(i) || 0) + 1); // map.get('뽀로로')가 1이므로, map.get(i) || 0 에서 map.get(i)값이 되고, +1을 해줌
map.set('뽀로로', 2); // 결과

/// set 연습 ///
let a = new Set('aabbbcccddd'); // {'a', 'b', 'c', 'd'} 중복을 제거
a.size; // 4
a.has('a'); // true
a.has('f'); // false
a.add('z'); // {'a', 'b', 'c', 'd', 'z'}
a;

for (const i of a) {
  console.log(i);
} // a // b // c // d // e

//
let b = new Set('aabbbcccddd'.split('')); // {'a', 'b', 'c', 'd'}
let b = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd']); // {'a', 'b', 'c', 'd'}

b.forEach((value, value, set) => {});
// array와 다르게 value가 2번 반복
// IE10은 미지원

b.forEach((x, y, set) => {
  console.log(x, y, set);
});

회사게시판 = ['이호준', '이호준', NaN, NaN, NaN];
let test = new Set(회사게시판);
test; // {'이호준', NaN}

// 교집합
let x = new Set('abc');
let y = new Set('cde');
let cro = [...x].filter((el) => b.has(el));

// 합집합
let union = new Set([...x].concat(...y)); // {'a', 'b', 'c', 'd', 'e'}
let union = new Set([...x, ...y]); // {'a', 'b', 'c', 'd', 'e'}

// 차집합
let dif = [...x].filter((el) => !y.has(el)); // ['a', 'b']

// 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 1. 배열의 유사도 (교집합의 갯수 구하는 문제)
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
} // 두 배열의 전체 갯수에서 set으로 중복된 값을 빼줌

function solution(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  let cro = [...s1].filter((e) => s2.has(e));
  return cro.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 2. 369게임
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order) // '29423'
    .split('') // ['2', '9', '4', '2', '3']
    .filter((num) => mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
// 3. 소인수분해
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}

// set, map, object, array가 이터러블 객체인지? 순서는 보장하는지?
// 1. 이터러블한 객체란? 순회가 가능한 객체 (object는 순회 불가능)
// set, map, array, string
// 2. 순서를 보장하는가? (object는 순서를 보장하지 않음)
// set, map, array, string
