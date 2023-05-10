// import Blog from './components/Blog';
// import Hello from './components/Hello';
// import MyList from './components/MyList';
// import ProductList from './components/ProductList';
import Counter from './components/Counter';
import { useState } from 'react';

// function One() {
//   return <p>one</p>;
// }

// function Two() {
//   return <p>two</p>;
// }

// function Three() {
//   return <p>three</p>;
// }

function Hello(props) {
  const name = props.name;
  if (name) {
    return <One name={name} />;
  } else {
    return <Two />;
  }
}

function One(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

function Two(props) {
  return (
    <div>
      <h1>name이 입력된 것이 없습니다.</h1>
    </div>
  );
}

function App() {
  const [datas, setDatas] = useState([
    {
      title: '개발자 무릎 담요',
      price: 17500,
      id: 101,
    },
    {
      title: 'Hack Your Life 개발자 노트북 파우치',
      price: 29000,
      id: 102,
    },
    {
      title: '우당탕탕 라이켓의 실험실 스티커북',
      price: 29000,
      id: 103,
    },
    {
      title: '버그를 Java라 버그잡는 개리씨 키링',
      price: 29000,
      id: 104,
    },
  ]);

  // React는 state함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리
  function handleClick(id) {
    setDatas(
      datas.filter((product) => {
        return product.id !== id;
      })
    );
  }

  return (
    <div>
      <Counter />
      <Hello name="쿠쿠" />
      {/* hello world */}
      {/* <Blog posts={posts} /> */}
      {/* <Hello name="알파카" /> */}
      {/* <ProductList /> */}
      {/* {[<One />, <Two />, <Three />, [<One />, <Two />, [<One />, <Two />]]]} */}
      {/* <MyList /> */}
      {/* --- datas */}
      {datas.map((product, index) => {
        return (
          <li key={product.id}>
            <h2>
              {index + 1}
              {product.title}
            </h2>
            <span>{product.price} 원</span>
            {/* <button
              onClick={(event) => {
                event.target.closest('li').remove();
              }}
            >
              삭제
            </button> */}
            <button
              onClick={() => {
                handleClick(product.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
      {/* --- datas */}
    </div>
  );
}
export default App;
