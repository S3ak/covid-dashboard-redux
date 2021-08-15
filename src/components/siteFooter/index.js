import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Container from "../container";

import ContactForm from "../../features/contactForm";

import {
  Wrapper,
  Copywright,
  IconLinkList,
  Item,
  Row,
  RowLast,
} from "./styled";

const socialLinkItems = [
  {
    label: "linkedin",
    orderId: 1,
    Icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/nkululeko-monde-s-1620912b/",
  },
];

export const Footer = ({ items = socialLinkItems, children }) => {
  return (
    <Wrapper>
      <Row>
        <ContactForm />
      </Row>

      <RowLast>
        <Copywright>Crafted with ♥ by Monde Sineke {children}</Copywright>

        <IconLinkList>
          {items.map(({ label, Icon, href }, orderId) => (
            <Item key={orderId} name={label} href={href}>
              {Icon}
            </Item>
          ))}
        </IconLinkList>
      </RowLast>
    </Wrapper>
  );
};

export default Footer;
