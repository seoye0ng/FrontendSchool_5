// 여러줄 복사하고 싶을 때에
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// mac : cmd + a, cmd k + f

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택

const value = 'two';

switch (value) {
  case 'one':
    console.log('hello one');
    break;
  case 'two':
    console.log('hello two');
    break;
  case 'three':
    console.log('hello three');
    break;
  default:
    console.log('hello default');
    break;
}

///

const value3 = 'four';

switch (value3) {
  case 'one':
    console.log('hello one');
  case 'two':
    console.log('hello two');
  case 'three':
    console.log('hello three');
  default:
    console.log('hello default');
}
// break가 없으면 들어온 표현식에 만족하는 케이스부터 뒤에까지 다 나온다

///

switch (new Date().getDay()) {
  case 0:
    console.log('일요일');
    break;
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
}
// 디폴트가 항상 필수는 아니다.

// 다른 언어에서 switch문 어떻게 사용할까? python은 switch가 없는데?
//javaScript는 아래문법을 switch문을 대신해서 사용하기도 한다.

const 요일 = new Date().getDay();
const 요일객체 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};
console.log(요일객체[요일]);

// default는 어떻게 처리?

const 요일2 = 10;
const 요일객체2 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};
// nullish연산자 사용
console.log(요일객체2[요일2] ?? 'hello');
// 단락평가 사용
console.log(요일객체2[요일2] || 'hello');
