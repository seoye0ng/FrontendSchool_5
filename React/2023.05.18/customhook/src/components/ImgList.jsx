import React from 'react';
import ImgItem from './ImgItem';

export default function ImgList({ imgList }) {
  return (
    <ul>
      {imgList.map((item) => {
        return (
          <li key={item.id}>
            <ImgItem img={item} />
          </li>
        );
      })}
    </ul>
  );
}
