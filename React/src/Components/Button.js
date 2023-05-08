import React from 'react';
import './Button.css';

export default function Button() {
  return (
    <div className="container">
      <h1>오늘의 기분을 선택해주세요 🙂</h1>
      <ul className="buttons">
        <li>
          <button>기분이: 좋아요! 😄</button>
        </li>
        <li>
          <button>기분이: 정말 좋아요! 🥰</button>
        </li>
        <li>
          <button>기분이: 최고에요! 😚</button>
        </li>
        <li>
          <button>기분이: 미쳤어요! 🤪</button>
        </li>
      </ul>
    </div>
  );
}
