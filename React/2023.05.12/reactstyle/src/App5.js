import React from 'react';
import styled, { css } from 'styled-components';

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

// one과 two의 스타일을 가진 div
const Three = styled.div`
  ${One}
  ${Two}
`;

const App = () => {
  return <Three>Lorem ipsum dolor</Three>;
};

export default App;
