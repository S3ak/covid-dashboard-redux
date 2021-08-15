import React from "react";
import { Reset } from "styled-reset";

import "./App.css";

import Container from "./components/appContainer";
import GlobalStyle from "./globalStyles";

// TODO: Import modules
// import ConfirmedRegionList from "./features/confirmedRegions/List";
// import ContactForm from "./features/contactForm";
import SelectCountry from "./features/selectCountry";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Container asideContent={<SelectCountry />}>
        <p>content</p>
      </Container>
    </>
  );
}

export default App;
