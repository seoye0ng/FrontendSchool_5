import React from 'react';
import './Main.css';
import { useState } from 'react';

export default function Main({ modalOpen }) {
  const [expert, setExpert] = useState('');
  const [traningtime, setTraningtime] = useState(0);
  // placeholder를 주게되면 초기값을 '' 이렇게 문자열로 줘야함
  const [dday, setDday] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDday(Math.ceil(10000 / traningtime));
    // setDday(를 실행한)의 결괏값이 dday로 들어감
  };

  return (
    <main>
      <h2 className="a11y">필요한 시간 알아보기</h2>
      <form className="cont-input" onSubmit={handleSubmit}>
        <p className="txt-wannabe">
          나는
          <input type="text" placeholder="" required value={expert} onChange={(e) => setExpert(e.target.value)} />
          전문가가 될것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에
          <input
            type="number"
            placeholder=""
            className=""
            required
            value={traningtime}
            onChange={(e) => setTraningtime(e.target.value)}
          />
          시간씩 훈련할 것이다.
        </p>
        <button type="submit" className="btn-exc">
          나는 며칠동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
      {!!dday && (
        <section className="cont-result">
          <h3 className="a11y"></h3>
          <p className="txt-wannabe">
            당신은 <strong>{expert}</strong> 전문가가 되기 위해서
            <br />
            대략 <strong>{dday}</strong> 일 이상 훈련하셔야 합니다! :&#41; 🤩
          </p>
          <button type="button" className="btn-go" onClick={modalOpen}>
            훈련하러 가기 GO!GO!
          </button>
          <button type="button" className="btn-share">
            공유하기
          </button>
        </section>
      )}
    </main>
  );
}
