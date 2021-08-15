import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 100%;
  padding: var(--size-m);

  .dropdown-menu {
    width: 100%;
    display: flex;
    background: var(--c-bg--inverse);
    padding: var(--size-m);
    color: var(--c-text--inverse);
    border-radius: 0 0 12px 12px;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    min-height: 34px;
    text-decoration: ;
  }

  > div {
    width: 100%;

    > div {
      width: 100%;
    }
  }

  .rbt-input-main.form-control.rbt-input {
    width: 100%;
    min-height: var(--size-lg);
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--bg-inverted);
`;

export const Article = styled.article`
  flex: 0 1 auto;
  width: 100%;
  padding: var(--size-m);
`;
