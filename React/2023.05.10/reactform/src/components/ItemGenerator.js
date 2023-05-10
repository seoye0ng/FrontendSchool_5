import React from 'react';

export default function ItemGemerator({ datas }) {
  return (
    <>
      {datas.map((data) => {
        return (
          <div key={data.id}>
            <h2>
              {data.id}. {data.title}
            </h2>
            <time>{data.date}</time>
            <strong>{data.food}</strong>
          </div>
        );
      })}
    </>
  );
}
