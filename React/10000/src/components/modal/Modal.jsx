import React from 'react';
import './Modal.css';
import licat from '../../img/licat.png';

export default function Modal({ modalClose }) {
  return (
    <article id="modal">
      <div className="modal-wrap">
        <h2>화이팅!!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!</h3>
        <img src={licat} alt="응원하는 라이캣" />
        <button type="button" class="btn-close" onClick={modalClose}>
          종료하고 진짜 훈련하러가기 GO!GO!
        </button>
      </div>
    </article>
  );
}
