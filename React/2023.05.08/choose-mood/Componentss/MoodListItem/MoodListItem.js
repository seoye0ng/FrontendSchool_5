import React from 'react';
import './MoodListItem.css';

export default function MoodListItem(props) {
  const onItemClick = () => {
    props.onClickEvent(props.mood);
  };
  const getBackgroudColor = () => {
    if (props.isSelected) {
      return 'skyblue';
    }
  };

  return (
    <li>
      <button className="btn-item" onClick={onItemClick} style={{ backgroundColor: getBackgroudColor() }}>
        기분이: {props.mood}
      </button>
    </li>
  );
}
