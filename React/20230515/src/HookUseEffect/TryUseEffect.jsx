import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      if (count % 2) {
        alert('홀수입니다');
      } else {
        alert('짝수입니다');
      }
    }
  }, [count]);
  // count가 바꼈다 -> useEffect함수를 진행한다
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}

export default Counter;
