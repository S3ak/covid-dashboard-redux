import React from "react";

import { Wrapper, StyledInput } from "./styled";

export const InputField = ({ children, ...inputProps }) => {
  return (
    <Wrapper>
      <StyledInput {...inputProps} />
      {children}
    </Wrapper>
  );
};

export default InputField;
