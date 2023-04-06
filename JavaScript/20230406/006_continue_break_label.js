// break은 자신을 감싼 반복문만 탈출, 그 상위 반복문까지 탈출하지 X
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
    if (j === 3) {
      break;
    }
  }
}

switchValue = 0;
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
    if (j === 3) {
      if (true) {
        if (true) {
          if (true) {
            switchValue = 1;
            break;
          }
        }
      }
    }
  }
  // toggle
  if (switchValue === 1) {
    break;
  }
}

///

// continue는 아래 구문을 실행시키지 않고, 다음 루프로 넘어가서 다시 구문을 실행
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
    if (j === 3) {
      continue;
    }
  }
} // 구구단 다 출력 continue 밑에 아무 구문도 없어서

// 아래와 같이 쓰면
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (j === 3) {
      continue;
    }
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
// j가 3일 경우만 빼고 출력

///

// label은 특정한 곳으로 '점프'하게 만든다 -> 가독성을 해친다(사용하지 않길 권장)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}

bye: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break bye;
    }
    console.log(i, j);
  }
}

for (let 반복 = 0; 반복 < 3; 반복++) {
  구구단: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i + j === 3) {
        break 구구단;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`);
    }
  }
}

구구단: for (let 반복 = 0; 반복 < 3; 반복++) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i + j === 3) {
        break 구구단;
      }
      console.log(`${반복}. ${i} X ${j} = ${i * j}`);
    }
  }
}
