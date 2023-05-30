function App() {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  // 화면에 값 변하는거 쓰고싶으면 useState쓰셈 ㅋ
  // state랑 setState가 있는데 setState는 state를 바꿀 때 사용
  // setState를 이용해서 값을 바꾸면 화면이 새로 그려짐

  // num에 관련해서 뭔가 하고있음.
  React.useEffect(() => {
    console.log('num이 바뀌었습니다.');
    if (num % 2 == 0) {
      alert('num이 짝수입니다');
    }
    return () => console.log('num에 의존하는 클린업!');
  }, [num]);

  // num2에 관련해서 뭔가 하고있음.
  React.useEffect(() => {
    console.log('num2가 바뀌었습니다.');
  }, [num2]);
  // effect는 처음에 한번 무저건 실행
  // 뒷 상태에 의존하고 있기때문에 num이 바뀔때마다 실행
  // useEffect는 [의존성배열]안의 값이 바뀌면 효과를 일으켜 준다!
  // 그래서 언제쓰는데? state가 변할 때마다 관련하여 어떤 행동을 하고 싶을 때

  // 매 렌더링때 어떤 효과를 실행하고 싶으면? 의존성 배열에 아무것도 넣지 않는게 아니라
  // 아예 아무것도 적지 않는다. 배열도 적지말고 그냥 함수만 넣어.
  React.useEffect(() => {
    // 여기는 마운트, 업데이트 때 일어남.
    return () => {
      // 그럼 여기는..? 업데이트 때랑 언마운트 때 일어남.
    };
  });

  React.useEffect(() => {
    // 이렇게 적으면 마운트일 때만(최초 컴포넌트가 만들어질 때만) 실행이 된다.
    // 최초에 한 번만 실행하고 싶을 때!
    setNum(10);
    setNum2(10);
    console.log('마운트가 되었습니다.');
    // 의존성 배열에 아무것도 안적은 클린업 함수는 언마운트때 한번 실행!
    return () => console.log('언마운트 되었습니다.');
  }, []);

  return (
    <div>
      {num} 뭐하라고 있는거?{num2}
      <button
        onClick={() => {
          setNum(num + 1);
          console.log(num);
        }}
      >
        더하기
      </button>
      <button onClick={() => setNum2(num2 - 1)}>빼기</button>
    </div>
  );
}

function index() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
}

index();
