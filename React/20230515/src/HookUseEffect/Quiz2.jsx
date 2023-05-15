import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log('렌더링이 됩니다..?'); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  //   방법 1 -> clear를 해주지 않아서 계속 쌓임
  //   setTimeout(() => {
  //     setToday(new Date());
  //     setHour(today.getHours());
  //     setMin(today.getMinutes());
  //     setSec(today.getSeconds());
  //   }, 1000);

  //   setInterval을 위에처럼 사용하면 문제가 발생 -> useEffect를 사용해서 해결 cleanup을 사용하는 방법
  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setToday(today);
      setHour(today.getHours());
      setMin(today.getMinutes());
      setSec(today.getSeconds());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [today]);

  //   cleanup을 쓰지 않는 방법
  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       const today = new Date();
  //       setToday(today);
  //       setHour(today.getHours());
  //       setMin(today.getMinutes());
  //       setSec(today.getSeconds());
  //     }, 1000);
  //   }, []);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;
