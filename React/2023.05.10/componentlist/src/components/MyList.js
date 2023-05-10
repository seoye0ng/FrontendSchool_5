import React from 'react';

export default function MyList() {
  const items = [
    { id: 1, name: '파스타' },
    { id: 2, name: '라따뚜이' },
    { id: 3, name: '라자냐' },
  ];

  const itemList = [];

  items.forEach((item) => {
    itemList.push(<li key={item.id}>{item.name}</li>);
  });

  return <ul>{itemList}</ul>;
}
