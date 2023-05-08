import React from 'react';
import MoodListItem from '../MoodListItem/MoodListItem';
import './MoodList.css';

export default function MoodList(props) {
  const moods = ['좋아요! 😄', '정말 좋아요! 🥰', '최고에요! 😚', '미쳤어요! 🤪'];

  return (
    <ul className="container-list">
      {moods.map((moodEl) => {
        // mood : 기분의 텍스트, isSelected : 현재 사용자의 기분이 맞는지 전달, onClickEvent : 현재 기분을 변경하는 함수
        return <MoodListItem mood={moodEl} isSelected={props.mood === moodEl} onClickEvent={props.onItemClick} />;
      })}
    </ul>
  );
}
