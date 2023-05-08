import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  //   let like = 0;
  const [txt, setTxt] = useState('hello');

  function clickLike(e) {
    // setLike(like + 1);
    like === '' ? setLike('Like') : setLike('');
  }

  return (
    <>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 : </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd style={{ color: 'green' }}>{props.color}</dd>
      </dl>
      <button onClick={clickLike}>
        like <span>{like}</span>
      </button>
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
    </>
  );
}

export default Resume;
