import React from "react";

import { Wrapper } from "./styled";

export const InputField = ({ children, value = "value", ...otherProps }) => {
  return (
    <Wrapper>
      <input value={value} {...otherProps} />
      {children}
    </Wrapper>
  );
};

export default InputField;
