import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { submitForm } from "./contactFormAPI";

const initialState = {
  form: null,
  status: "idle",
  isSuccess: false,
  error: null,
};

export const submitFormAsync = createAsyncThunk(
  "contactForm/submit",
  async () => await submitForm()
);

export const contactFormSlice = createSlice({
  name: "contactForm",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(submitFormAsync.pending, (state) => {
        state.status = "posting";
      })
      .addCase(submitFormAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.form = null;
        state.regions = action.payload;
        state.isSuccess = true;
      })
      .addCase(submitFormAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = {
          message: action.payload || "Could not submit your form",
        };
      });
  },
});

// export const { confirmedRegionsAdded } = contactFormSlice.actions;

export const selectContactForm = (state) => state.contactForm;

export default contactFormSlice.reducer;
