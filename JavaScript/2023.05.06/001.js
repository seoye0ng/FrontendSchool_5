let start = Date.now();

const result = (x) => {
  console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
};

const asyncBlocking = () => {
  return new Promise((resolve) => {
    let i = 0;
    while (i < 99999999) {
      i++;
    }
    resolve('blocking finished');
  });
};

result('동기식 코드1');

setTimeout(() => {
  result('setTimeout finished');
}, 0);

// 프로미스 객체 자체는 비동기가 아님
// result(asyncBlocking());

// 프로미스 객체의 then메서드가 비동기적으로 실행되는 메서드
result(
  asyncBlocking().then((txt) => {
    result(txt);
  })
);

result('동기식 코드2');
