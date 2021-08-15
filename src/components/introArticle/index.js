import React from "react";
// import { FaAngleDown } from "react-icons/fa";

// import Button from "../../user-inputs/buttons/base";

import { Wrapper, Title, Description } from "./styled";

export const IntroArticle = ({ children }) => {
  return (
    <Wrapper>
      <Title>About</Title>
      <Description>
        This Dashbaord displays the latest data from regions impacted by covid
      </Description>

      {/* <Button kind="text" mode="primary" Icon={<FaAngleDown />}>
        Read More
      </Button> */}
    </Wrapper>
  );
};

export default IntroArticle;
