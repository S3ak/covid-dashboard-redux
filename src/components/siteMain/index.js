import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  grid-area: main;
  width: 100%;
  background: var(--c-bg);
  display: flex;

  ${media.greaterThan("medium")`
  border-left: 1px solid var(--c-accent);
  border-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      var(--c-accent),
      rgba(0, 0, 0, 0)
    )
    1 100%;
  `}
`;

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Main;
