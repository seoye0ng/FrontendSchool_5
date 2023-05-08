import React from 'react';
import './DisplayMood.css';

export default function DisplayMood(props) {
  return <div className="container">{props.mood ? `기분이 ${props.mood}` : `선택해주세요`}</div>;
}
