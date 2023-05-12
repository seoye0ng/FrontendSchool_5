import React from 'react';
import styled from 'styled-components';

// Sass문법도 사용할 수 있음
const UniAfter = styled.div`
  &:after {
    content: '!!';
  }
`;

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

// 아래처럼 확장해서 사용할 수 있음(상속받아서 사용)
const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

function App() {
  return (
    <div>
      <UniAfter>good</UniAfter>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
