import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid var(--c-accent);
  justify-content: space-between;
  padding: var(--size-s) 0 var(--size-xs);
  min-height: 40px;
  align-items: center;
`;

export const Title = styled.p`
  width: 100%;
  flex: 1 1 auto;
  opacity: 0.87;
`;

export const Value = styled.strong`
  width: 100%;
  flex: 1 1 auto;
  text-align: right;
  font-weight: bold;
  color: var(--c-text);
`;
