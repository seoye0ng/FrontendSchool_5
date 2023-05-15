import React, { useState, useEffect, useRef } from 'react';

function Counter2() {
  const [num2, setNum2] = useState(0);
  //   let num = 0;
  const num = useRef(0);
  //  useRef를 사용했을 때 : 이렇게 useRef를 사용하면 값을 기억함

  return (
    <>
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      {/* useRef를 사용하지 않았을 때 : 여기서 setNum을 실행시키는 순간 counter함수를 새로 렌더링하는 것(다시 실행시키는 것 -> 그래서 let으로 선언한 num값은 다시 0이 된다. */}
      <div>{num2}</div>
      <button
        onClick={() => {
          num += 1;
          console.log(num);
        }}
      >
        버튼
      </button>
      <div>{num}</div>
    </>
  );
}

export default Counter2;
