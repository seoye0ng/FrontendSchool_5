import './App.css';
import Menu from './components/menu/Menu.js';
import MenuNew from './components/menuNew/MenuNew.js';
import TripList from './components/tripList/TripList.js';

function TextArea() {
  return (
    <div className="wrapper">
      <textarea readonly maxLength={3} style={{ backgroundColor: 'blue' }} />
    </div>
  );
}

function App() {
  const name = '알파카!!';
  const 변수 = 'value';
  function 함수() {
    console.log('함수 함수');
  }
  const 값 = true;

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    <div>
      {/** 최상위 태그는 하나만! */}
      {100 + 1}
      {'hello' + 'world'}
      {`${[1, 2, 3]}`}
      {[1, 2, 3].map((x) => x ** 2)}
      {함수()}
      {변수}
      {값 ? 'one' : 'two'}
      <TextArea />

      <MenuNew />
      <Menu />
      <h1>Hello, world!</h1>
      <h1>안녕, {name}!</h1>
      <h2 style={{ color: 'red' }}>연도 : {year}</h2>
      <h2>
        월/일 : {month}/{day}
      </h2>
      <h2>
        시간 : {hour}시 {minute}분 {second}초
      </h2>
      <TripList />
    </div>
  );
}

export default App;
