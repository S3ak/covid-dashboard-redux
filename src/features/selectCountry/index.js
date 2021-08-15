import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import {
  selectRegions,
  getConfirmedRegionsAsync,
} from "../confirmedRegions/confirmedRegionSlice";

import { StyledSelect, Container, Article } from "./styled";

export default function SelectCountry() {
  const { status, regions = [], error } = useSelector(selectRegions);
  const dispatch = useDispatch();
  const [singleSelections, setSingleSelections] = useState([]);
  //   const el = useRef(null);

  const handleOnChange = (selected) => {
    setSingleSelections(selected);
  };

  // Note: Handle side effects
  useEffect(() => {
    dispatch(getConfirmedRegionsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // TODO
    // dispatch(setSelectedRegion());
  }, [singleSelections]);

  if (status === "loading") {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const options = regions.map(({ combinedKey }) => ({
    value: combinedKey,
    label: combinedKey,
  }));

  return (
    <Container>
      <Article>
        <h2>Filter Regions</h2>

        <p>
          You can use the input below to filter the regions affected by covid
        </p>
      </Article>
      <StyledSelect>
        <Typeahead
          autoFocus
          selected={singleSelections}
          onChange={handleOnChange}
          options={options}
          placeholder="search here"
        />
      </StyledSelect>
    </Container>
  );
}
