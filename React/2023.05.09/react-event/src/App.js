import { useState } from 'react';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Modal from './Components/Modal';

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //1~10호를 만들 것

  // list map을 이용하여 h1 태그들의 리스트를 만들기
  return (
    <div>
      {num.map((i) => (
        <h1>
          안녕, {name} {i}호
        </h1>
      ))}
    </div>
  );
}

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
  };

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(true);

  function modalClose() {
    setModalShow(false);
  }

  return (
    <>
      <Hello name="알파카" />
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용악관에 대한 모달</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem</p>
        </Modal>
      )}
    </>
  );
}

export default App;
