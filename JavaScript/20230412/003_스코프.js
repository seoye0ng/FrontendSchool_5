// let과 const는 블록레벨 스코프를 가지고 있다
// 스코프 : 변수에 접근할 수 있는 유효범위
// 전역 스코프
// 함수 스코프
// 블록 스코프 (ES6)
{
  let x = 10;
  const y = 20;
}
console.log(x, y);

// 지역변수와 전역변수
let x = 100; // 블록 밖에 선언하면 전역에서 접근할 수 있는 변수가 된다. (전역변수)
function 함수() {
  let y = 20; // 블록 안에 선언하면 밖에서 접근할 수 없는 변수가 된다. (지역변수)
  console.log(x); // 스코프 체이닝 (해당 영역에 변수가 없으면 스코프 체인을 따라 상위 스코프까지 올라 간다. 전역까지 올라갔는데도 변수가 없다면 에러가 난다.)
}
함수();

// 1
let a = 10;
function 함수1() {
  let a = 20;
  function 함수2() {
    function 함수3() {
      console.log(a);
    }
  }
}

함수1();

// 2
let b = 10;
function 함수1() {
  let b = 20;
  function 함수2() {
    function 함수3() {
      let b = 30;
      console.log(b);
    }
    함수3();
  }
  함수2();
}

함수1();

// 3
let c = 10;
function 함수1() {
  let c = 20;
  function 함수2() {
    function 함수3() {
      console.log(c);
    }
    함수3();
  }
  함수2();
}

함수1();

//
let aa = 10;
let bb = 10;
function 함수1() {
  let aa = 20;
  let bb = 20;
  function 함수2() {
    let aa = 30;
    console.log(aa, bb);
  }
  함수2();
}
함수1();

// 함수의 호이스팅
// (함수나 변수를 끌어올려 주는 것 처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행
함수(10);

function 함수(x) {
  return x + 100;
}

// let, const는 순서를 지켜줘야 함. -> let과 const는 값을 할당하거나 선언한 다음부터 사용할 수 있음
// error가 생깁니다.
함수(10);

let 함수 = (x) => x + 100;

// error가 생깁니다.
함수(10);

const 함수 = function (x) {
  return x + 100;
};
