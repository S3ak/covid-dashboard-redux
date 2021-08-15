import styled from "styled-components";

const Container = styled.div`
  grid-area: aside;
  width: 100%;
  background: #fefae0;
  display: flex;
`;

const Aside = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Aside;
