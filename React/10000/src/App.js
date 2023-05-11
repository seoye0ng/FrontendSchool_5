import Header from './components/header/Header.jsx';
import Main from './components/main/Main.jsx';
import Footer from './components/footer/Footer.jsx';
import Modal from './components/modal/Modal.jsx';
import { React } from 'react';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);

  function modalClose() {
    setModalShow(false);
  }

  function modalOpen() {
    setModalShow(true);
  }

  return (
    <div id="app">
      <Header />
      <Main modalOpen={modalOpen} />
      <Footer />
      {modalShow && <Modal modalClose={modalClose} />}
      {/* modalShow가 true일 때 실행 */}
    </div>
  );
}
export default App;
