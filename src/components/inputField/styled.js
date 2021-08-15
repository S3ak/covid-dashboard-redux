import styled, { css } from "styled-components";

export const inputMixin = css`
  width: 100%;
  padding: var(--size-s);
  border: 1px solid var(--c-accent);
  border-radius: var(--radius-s);
  font-size: var(--f-size-m);
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  ${inputMixin};
`;
