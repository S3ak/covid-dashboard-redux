import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRegions } from "../../services/covid19";

const initialState = {
  regions: [],
  selectedRegion: null,
  status: "loading",
  error: null,
};

export const DEFAULT_REGION = "South Africa";

export function findSelectedRegionByName(regions, regionName) {
  return regions.find(({ combinedKey }) => combinedKey === regionName);
}

export const getConfirmedRegionsAsync = createAsyncThunk(
  "confirmedRegions/fetchRegions",
  async () => await fetchRegions()
);

export const regionsSlice = createSlice({
  name: "confirmedRegions",
  initialState,
  reducers: {
    confirmedRegionsAdded: (state, action) => {
      state.regions = action.payload;
    },
    setSelectRegion: (state, action) => {
      state.selectedRegion = state.regions.find((region) => {
        return region.combinedKey === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfirmedRegionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getConfirmedRegionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.regions = action.payload;
        state.selectedRegion = findSelectedRegionByName(
          action.payload,
          DEFAULT_REGION
        );
      })
      .addCase(getConfirmedRegionsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = {
          message: action.payload || "Could not fetch regions",
        };
      });
  },
});

export const { confirmedRegionsAdded, setSelectRegion } = regionsSlice.actions;

export const selectRegions = (state) => state.confirmedRegions;

export default regionsSlice.reducer;
