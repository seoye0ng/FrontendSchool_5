let x = 0;
while (x < 10) {
  console.log('start');
  console.log(x);
  x += 1;
  console.log('end');
}

/////
// why? 10까지 출력이 되는가?
let x2 = 0;
while (x2 < 10) {
  console.log(x2);
  x2 += 1;
}

let x3 = 0;
while (x4 < 10) {
  console.log(x4);
  x4 += 1;
  console.log('');
}

/////

/// do-while반복문

let input;

do {
  input = prompt('숫자를 입력하세요.');
} while (isNaN(input));
// isNaN()보다는 Number.isNaN()을 사용하자
console.log('입력한 숫자는 ' + input + '입니다.');

///
let input2;

do {
  input2 = confirm('다음에도 저희와 함께 하시겠습니까?');
} while (!input2);

console.log('감사합니다.');

// 암기코드 1
// 구구단

// 1. for 반복문
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// 2. while 반복문
let i = 2;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
}
// 오답 - j는 계속 10인 상태
let ii = 2;
let jj = 1;
while (ii < 10) {
  //j = 1; // 이 초기화 코드를 넣어줘야 제대로 실행
  while (jj < 10) {
    console.log(`${ii} X ${jj} = ${ii * jj}`);
    jj++;
  }
  ii++;
}

// 암기코드 2
// 문자열 뒤집기

// 1. for문
let str = 'hello world';
let result = '';
for (let i = 0; i < str.length; i++) {
  //   result = result + s[i]; 이 코드는 뒤집히지 않고 그대로 나온다
  result = str[i] + result;
}
console.log(result);
// s[0] + result => 'h' + '' => 'h'
// s[0] + result => 'e' + 'h' => 'eh'
// s[0] + result => '/' + 'eh' => 'leh'
// ...

// 2. while문
let str2 = 'hello world';
let result2 = '';
let count = 0;
while (count < str2.length) {
  result2 = str2[count] + result2;
  count++;
}

// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1

// 1. for문
let num = 1;
for (let i = 1; i < 6; i++) {
  num *= i;
}
console.log(num);

// 2. while문
let num2 = 1;
let index = 1;
while (index < 6) {
  num2 *= i;
  index += 1;
}

console.log(num2);
