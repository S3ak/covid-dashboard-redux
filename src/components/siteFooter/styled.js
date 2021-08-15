import styled from "styled-components";

export const Wrapper = styled.article`
  grid-area: footer;
  background: var(--c-bg--inverse);
  display: flex;
  align-items: center;
  color: var(--c-text--inverse);
  padding: 7px 8px;
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
`;

export const RowLast = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`;
