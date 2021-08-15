import React from "react";

import { Wrapper, Title, Value } from "./styled";

export const DetailField = ({ children, title = "title", value = "value" }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Wrapper>
  );
};

export default DetailField;
