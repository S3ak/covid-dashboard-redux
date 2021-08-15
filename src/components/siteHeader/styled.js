import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.article`
  grid-area: header;
  font-family: Roboto;
  width: 100%;
  font-style: normal;
  background: var(--c-bg--inverse);
  color: var(--c-text--inverse);
  padding: var(--size-base);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: var(--f-size-huge);
  color: var(--c-text--inverse);
  margin: 0 auto;
  max-width: 900px;

  ${media.greaterThan("medium")`
    margin: 0;
  `}
`;

export const Subtitle = styled.p`
  font-size: var(--f-size);
  padding: 0;
  margin: var(--size-s) auto;

  ${media.greaterThan("medium")`
    margin: 0;
  `}
`;
