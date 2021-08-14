import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchRegions } from "../../services/covid19";

const initialState = {
  regions: [],
  status: "idle",
  error: null,
};

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfirmedRegionsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getConfirmedRegionsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.regions = action.payload;
      })
      .addCase(getConfirmedRegionsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = {
          message: action.payload || "Could not fetch regions",
        };
      });
  },
});

export const { confirmedRegionsAdded } = regionsSlice.actions;

export const selectRegions = (state) => state.confirmedRegions;

export default regionsSlice.reducer;
