import React, { useMemo } from "react";
import { useSelector } from "react-redux";

// import { selectRegion, getRegionState } from "./regionDetailSlice";
import { selectRegions } from "../confirmedRegions/confirmedRegionSlice";
// import Map from "../../components/map";
import Chart from "../../components/chart";

import {
  Container,
  Header,
  Section,
  Description,
  DetailsList,
  Figure,
} from "./styled";

import DetailField from "../../components/detailField";
import { BASE_URL } from ".././../services/covid19";

export function convertFromCamelToSentenceCase(text) {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * @description Displays the details of a single region
 * @requires RegionsReducer
 * @returns React.Node
 */
function RegionView() {
  const { status, selectedRegion, error } = useSelector(selectRegions);

  const title = selectedRegion?.combinedKey;
  const country = selectedRegion?.countryRegion;
  // const lat = selectedRegion?.lat;
  // const long = selectedRegion?.long;
  const description = "You can view details of the selected region below";

  const fieldDetails = useMemo(() => {
    if (!selectedRegion) {
      return [];
    }

    const list = Object.entries(selectedRegion);

    return list;
  }, [selectedRegion]);

  const isGraphVisible = selectedRegion && country;
  // const isMapVisible = lat && long;

  const chartData = [
    {
      name: "28 Days ago",
      cases: selectedRegion?.cases28Days,
      deaths: selectedRegion?.deaths28Days,
    },
    {
      name: "Now",
      cases: selectedRegion?.confirmed,
      deaths: selectedRegion?.deaths,
    },
  ];

  if (status === "loading" || !selectedRegion) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container>
      <Section>
        <Header>{title}</Header>
        <Description>{description}</Description>
        {isGraphVisible && (
          <Figure>
            <img
              alt={`Graph of covid-19 data for ${title}`}
              src={`${BASE_URL}/api/countries/${encodeURI(country)}/og`}
            />
          </Figure>
        )}

        {/* TODO: 
        <Status cases={cases28Days} deaths={deaths28Days} /> */}
      </Section>
      <Section>
        <DetailsList>
          {fieldDetails.map((i) => (
            <DetailField
              key={i[0]}
              title={convertFromCamelToSentenceCase(i[0])}
              value={i[1] === null ? "Unknown" : i[1]}
            />
          ))}
        </DetailsList>
      </Section>
      {/* FIXME: Maps not displaying correctly 
      {isMapVisible && (
        <Section>
          <Map latitude={lat} longitude={long} />
        </Section>
      )} */}
      <Section>
        <Chart data={chartData} />
      </Section>
    </Container>
  );
}

export default RegionView;
