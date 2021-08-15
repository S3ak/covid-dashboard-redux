import styled from "styled-components";

const Container = styled.div`
  grid-area: main;
  width: 100%;
  background: var(--c-bg);
  display: flex;
`;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
