// random은 확률적으로 random이 맞나?
// 게임 확률
// 이럴때 무한반복 코드를 사용한다.

let answer = Math.floor(Math.random() * 100);
// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 나오는 수학수식이다.
// ~~(Math.random() * 100)
let count = 0;

for (;;) {
  count += 1;
  let userInput = parseInt(window.prompt('값을 입력해주세요!'));
  // window빼고 prompt만 써도 된다.
  if (answer > userInput) {
    window.alert('UP');
  } else if (answer < userInput) {
    window.alert('DOWN');
  } else if (Number.isNaN(userInput)) {
    window.alert('다시 입력하세요!'); // 취소누르면 답이 나오는 버그를 수정
  } else {
    window.alert('CORRECT!');
    break;
  }
}

console.log(`${count}번째 맞추셨습니다!`);
