import React from "react";
import "./App.css";
import { Reset } from "styled-reset";

import GlobalStyle from "./globalStyles";
import ConfirmedRegionList from "./features/confirmedRegions/List";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle />
      <ConfirmedRegionList />
    </div>
  );
}

export default App;
