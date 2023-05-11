import React from 'react';
import title from '../../img/title.png';
import subTitle from '../../img/txt_subtitle.png';
import './Header.css';

export default function header() {
  return (
    <header className="header-law">
      <h1 className="title-law">
        <img className="img-title" src={title} alt="타이틀 이미지" />
      </h1>
      <img src={subTitle} alt="연습은 어제의 당신보다 당신을 더 낫게 만든다." className="img-txt" />
      <p className="txt-desc">
        <strong>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한의 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </header>
  );
}
