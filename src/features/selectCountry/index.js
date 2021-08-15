import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

import {
  selectRegions,
  getConfirmedRegionsAsync,
  setSelectRegion,
} from "../confirmedRegions/confirmedRegionSlice";

import { StyledSelect, Container, Article } from "./styled";

export default function SelectCountry() {
  const { status, regions = [], error } = useSelector(selectRegions);
  const dispatch = useDispatch();

  const handleOnChange = (selected = []) => {
    if (selected.length === 0) {
      return;
    }

    dispatch(setSelectRegion(selected[0].value));
  };

  // Note: Handle side effects
  useEffect(() => {
    dispatch(getConfirmedRegionsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "loading") {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const options = regions.map(({ combinedKey, ...otherProps }) => ({
    ...otherProps,
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
          id="selectRegion"
          onChange={handleOnChange}
          options={options}
          placeholder="search here"
        />
      </StyledSelect>
    </Container>
  );
}
