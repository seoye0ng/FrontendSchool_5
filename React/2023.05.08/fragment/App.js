import React, { Fragment } from 'react';
import './FragmentTest.css';

function ListItem({ item }) {
  return (
    <>
      <dt>사과</dt>
      <dd>사과는 겨울이 제철임당</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
    </dl>
  );
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' },
];

function MyComponent() {
  const itemList = items.map((item) => {
    return (
      <Fragment key={item.id}>
        <dt>{item.name}</dt>
        <dd>{item.id % 2 === 0 ? '내가 먹어 본 ' + item.desc : '내가 안먹어 본 ' + item.desc}</dd>
      </Fragment>
    );
  });
  // 구조 분해 할당
  // return items.map(({id, name, desc}) => {
  //   return (
  //     <>
  //       <dt>{name}</dt>
  //       <dd>{desc}</dd>
  //     </>
  //   );
  // });
  return <dl>{itemList}</dl>;
}

function App() {
  return (
    <div>
      <h1>안녕, 알파카 1호!</h1>
      <h2>안녕, 알파카 2호!</h2>
      <Glossary />
      <MyComponent />
    </div>
  );
}
export default App;
