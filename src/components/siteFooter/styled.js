import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  grid-area: footer;
  background: var(--c-bg--inverse);
  display: flex;
  align-items: center;
  color: var(--c-text--inverse);
  padding: var(--size-l) var(--size-m);
`;

export const IconLinkList = styled.h2``;
export const Copywright = styled.p``;

export const Item = styled.a`
  color: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const Row = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
`;

export const RowLast = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  gap: var(--size-xs);
`;
