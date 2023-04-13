// this (***)
// 자신을 호출한 객체
// 자신이 생성할 객체

function a() {
  console.log(this);
}
a(); // window (자신을 호출한 객채를 가리킴)
// a() === window.a()

function b() {
  console.log('hello world');
}
b(); // window (자신을 호출한 객채를 가리킴)
window.b(); // window (자신을 호출한 객채를 가리킴 - 점 앞에 있는 객체)

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};
myObj.func1(); // myObj (자신을 호출한 객채를 가리킴)

///////////////////////////////////

let myObj2 = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

let test = myObj2.func1;
test(); // window -> test를 호출한 것은 window이기 때문

//
const aa = 123;

const bb = {
  aa: 456,
  cc: function () {
    console.log(aa); // 123
    console.log(this.aa); //456
  },
};
bb.cc(); // 123 // 456

///////////////////////////////

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라서 this의 의미가 달라지기 때문이다.
// 자기 자신을 호출한 애를 출력해준다.
// bind를 포함한 예외사항이 있다

function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
};

var a = {
  // var a = {b}
  b: b,
};

sayName(); // window
c.say(); // c
b.c.say(); // c
a.b.c.say(); // c

// 문제를 조금 더 꼬아보겠습니다.
function sayName() {
  console.log(this);
}

var c = {
  hello: 'world',
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
  say: sayName,
};

var a = {
  // var a = {b}
  b: b,
  say: sayName,
};

a.b.say(); // b
a.say(); // a
c.say(); // c
a.b.c.say(); // c

/// 추가 예제 ///

var name = '뽀로로';

function helloName() {
  console.log(this.name);
}
sayN(); // 뽀로로

let peter = {
  name: 'Peter Parker',
  hello: helloName,
};
let bruce = {
  name: 'Bruce Wayne',
  hello: helloName,
};
peter.hello(); // Peter Parker
bruce.hello(); // Bruce Wayne

///

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

let jombi = {
  name: 'jombi',
  damaged: attackBeam,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: 'thanos',
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged();
jombi;

///

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 나이프 공격
  this.hp -= 5;
}

let jombi1 = {
  name: 'jombi',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos1 = {
  name: 'thanos',
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 1000,
  power: 100,
};

jombi1.damaged1(); // Beam
jombi1.damaged2(); // Knife
jombi1.hp; // 9975

///
/* this 사용 예시 */

let 호텔 = [
  {
    이름: '하나호텔',
    위치: '제주도 제주시 001',
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '둘호텔',
    위치: '제주도 제주시 002',
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: '셋호텔',
    위치: '제주도 제주시 003',
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

/// 추가 예제

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();
// a,b,c 도두 window
// 위 함수는 a.b.c() 이런 식으로 호출한 객체를 타고 올라가는 형태가 아니다.
