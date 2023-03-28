/*
// 1 ~ 45까지의 랜덤 숫자 생성하기
var randomNum = Math.random() * 45 + 1;
var ball = parseInt(randomNum);
document.write(ball);
*/

/*
// 랜덤 숫자 6개 배열에 담기
var lotto = [];
for (var i = 0; i < 6; i++) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}
*/

// 중복되는 숫자를 제외해서 6개의 숫자 배열에 담고 작은 순서대로 정렬하기
var lotto = [];
while (lotto.length < 6) {
  var num = parseInt(Math.random() * 45 + 1);
  if (lotto.indexOf(num) == -1) {
    lotto.push(num);
  }
}
lotto.sort((a, b) => a - b);
