import React from 'react';
import styled from 'styled-components';
import Hello from './Components/Hello';

// styled-components를 사용한 스타일 적용
const ContentDiv = styled.div`
  margin: 40px;
`;

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: red;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2>Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi corrupti quo blanditiis! Adipisci amet corporis
        ipsum odio minima aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque! Nemo, ullam.
      </p>
      <Hello />
    </ContentDiv>
  );
};

export default App;
