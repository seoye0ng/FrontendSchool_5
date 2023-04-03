// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가도니 지 얼마 안 된 문법으로 구식 브라우저는 폴리필(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것)이 필요

let firstName = null;
let lastName = null;
let nickName = 'violet';

// firstName이 없다면 nickName 출력
console.log(firstName ?? nickName);
// firstName이 없다면 lastName을, lastName이 없다면 nickName 출력
console.log(firstName ?? lastName ?? nickName);
// firstName이 없다면 lastName을, lastName이 없다면 nickName을 nickName이 없다면 '익명 사용자' 출력
console.log(firstName ?? lastName ?? nickName ?? '익명 사용자');

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c);

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100); // 100 (0은 false니까)
console.log(height ?? 100); // 0 (0은 null이 아니니까)

let height2 = 0;
console.log(height2 || 100); // 100
console.log(height2 ?? 100); // 100

let height3 = 0;
console.log(height3 || 'hello'); // hello
console.log(height3 ?? 'world');

// 아래 내용은 지금 여기서는 몰라도 괜찮다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
