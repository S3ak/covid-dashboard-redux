import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import regionsReducer from "../features/confirmedRegions/confirmedRegionSlice";
import contactFormReducer from "../features/contactForm/contactFormSlice";
// import { covid19Api } from "../services/covid19";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    confirmedRegions: regionsReducer,
    contactForm: contactFormReducer,
    // [covid19Api.reducerPath]: covid19Api.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(covid19Api.middleware),
});
