import styled from 'styled-components';

const ContentOne = styled.button`
  margin: 40px;
  color: white;
  border: 2px solid salmon;
  background-color: pink;
  padding: 1em;
`;

const ContentTwo = styled(ContentOne)`
  color: salmon;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);
  border: none;
  font-weight: 700;
`;

const ContentThree = styled(ContentTwo)`
  color: white;
  border-radius: 18px;
`;

const ContentFour = styled(ContentThree)`
  border-radius: 22px;
  background-color: salmon;
`;

export { ContentOne, ContentTwo, ContentThree, ContentFour };
