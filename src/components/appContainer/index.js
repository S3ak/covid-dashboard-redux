import styled from "styled-components";
import media from "styled-media-query";

import Header from "../siteHeader";
import Main from "../siteMain";
import Footer from "../siteFooter";
import Aside from "../siteAside";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: min-content auto auto minmax(min-content, max-content);
  grid-template-columns: auto;
  grid-template-areas:
    "header"
    "aside"
    "main"
    "footer";

  ${media.greaterThan("medium")`
  grid-template-rows: min-content 2fr minmax(min-content, 1fr);
  grid-template-columns: auto 1fr;

    grid-template-areas:
      "header header"
      "aside main"
      "footer footer";
  `}
`;

export const defaultNavItems = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "Contact Me",
    url: "/contact",
  },
];

export default function AppContainer({ children, asideContent }) {
  return (
    <Container>
      <Header navItems={defaultNavItems} />
      <Aside>{asideContent}</Aside>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}
