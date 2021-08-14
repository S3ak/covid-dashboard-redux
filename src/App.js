import React from "react";
import "./App.css";
import { Reset } from "styled-reset";

import GlobalStyle from "./globalStyles";
import ConfirmedRegionList from "./features/confirmedRegions/List";
import ContactForm from "./features/contactForm";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      <ContactForm />
      <ConfirmedRegionList />
    </div>
  );
}

export default App;
