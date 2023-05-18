import React, { useEffect, useState, useLayoutEffect } from 'react';

export default function App4() {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     setNum(10); //사실은 엄청 오래걸리고 어려운 로직
  //   }, [num]);

  useLayoutEffect(() => {
    setNum(10); //사실은 엄청 오래걸리고 어려운 로직
  }, [num]);

  return (
    <>
      <div>{num}</div>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>클릭</button>
      {/* useEffect가 누를 때마다 재실행되는데 렌더링이 되고 실행되기 때문에 화면에 깜박임이 나타남 */}
      {/* useLayoutEffect를 사용하면 렌더링되기 전에 10으로 변하기 때문에 화면에 깜박임이 X */}
    </>
  );
}
