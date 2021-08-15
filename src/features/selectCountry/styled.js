import styled from "styled-components";
import { inputMixin } from "../../components/inputField/styled";

export const StyledSelect = styled.div`
  width: 100%;
  padding: var(--size-m);

  .dropdown-menu {
    margin-top: var(--size-l);
    width: 100%;
    display: flex;
    background: var(--c-bg--inverse);
    padding: var(--size-m);
    color: var(--c-text--inverse);
    border-radius: var(--radius-m);
    flex-direction: column;
    gap: var(--size);
  }

  .dropdown-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    min-height: 34px;
    padding: var(--size-m) var(--size-s);
    font-size: var(--f-size-l);
    text-decoration: none;
    border-bottom: 1px solid var(--c-accent);
  }

  .close {
    position: relative;
    top: 2px;
    min-width: 68px;
    height: 100%;
    appearance: none;
    outline: none;
    border: 1px solid var(--c-danger);
    background-color: white;
    padding: var(--size-xxs);

    > span {
      display: none;
    }

    > span + span {
      display: block;
      font-size: var(--f-size);
    }
  }

  .form-control.rbt-input {
    ${inputMixin};
  }

  .rbt-input-hint {
    ${inputMixin};
  }

  > div {
    width: 100%;

    > div {
      width: 100%;
    }
  }
`;

export const Container = styled.form`
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

export const Form = styled.div``;
