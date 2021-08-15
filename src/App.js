import React from "react";
import { Reset } from "styled-reset";

import Container from "./components/appContainer";
import GlobalStyle from "./globalStyles";

// TODO: Import modules
// import ConfirmedRegionList from "./features/confirmedRegions/List";
import SelectCountry from "./features/selectCountry";
import RegionDetail from "./features/regionDetail";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Container asideContent={<SelectCountry />}>
        <RegionDetail />
      </Container>
    </>
  );
}

export default App;
