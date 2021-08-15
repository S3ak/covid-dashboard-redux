import React from "react";

import BtnMenu from "../button/menu";
import Container from "../container";

import { Wrapper, Title, Subtitle } from "./styled";

export const Header = ({ children, navItems = [] }) => {
  return (
    <Wrapper>
      <Container>
        <Title>Covivi</Title>

        <Subtitle>The Covid-19 Dashboard</Subtitle>

        <div>
          <BtnMenu />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
