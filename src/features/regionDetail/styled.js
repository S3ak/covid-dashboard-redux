import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.h2`
  margin-top: var(--size-l);
  width: 100%;
  font-size: var(--f-size-xl);
`;

export const Section = styled.div`
  width: 100%;
  flex: 1 1 auto;
  gap: var(--size-xxs);
  padding: 0 var(--size-s);

  & + & {
    padding: var(--size-s);
  }
`;

export const Description = styled.p`
  width: 100%;
  flex: 1 1 auto;
  margin-top: var(--size-s);
`;

export const Figure = styled.figure`
  width: 100%;
  flex: 1 1 auto;
`;

export const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--size-s);
  padding: var(--size-s);
`;
