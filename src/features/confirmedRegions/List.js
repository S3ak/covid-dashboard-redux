import React from "react";
import styled from "styled-components";

import mockRegions from "../../mocks/fixtures/regions.json";

const Container = styled.div`
  width: 100%;
  background: #fff;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: auto;
  width: 99%;
  border: 1px solid red;
  min-height: 32px;
  padding-top: 10px;

  & + & {
    padding-top: 2vh;
  }
`;

function RegionList({ regions = mockRegions }) {
  return (
    <Container>
      <List>
        {regions.length > 0 &&
          regions.map((r) => {
            return (
              <Item key={r.uid}>
                <div>
                  <h2>{r.combinedKey}</h2>
                </div>
              </Item>
            );
          })}
      </List>
    </Container>
  );
}

export default RegionList;
