import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://covid19.mathdro.id";

export const covid19Api = createApi({
  reducerPath: "covid19Api",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/` }),
  endpoints: (builder) => ({
    // /api/confirmed: global cases per region sorted by confirmed cases
    getConfirmedRegions: builder.query({
      query: () => `confirmed`,
    }),
    // /api/og: generate a summary open graph image
    getOpenGraph: builder.query({
      query: () => `og`,
    }),
    // /api/recovered: global cases per region sorted by recovered cases
    getRecovered: builder.query({
      query: () => `recovered`,
    }),
    // /api/deaths: global cases per region sorted by death toll
    getDeaths: builder.query({
      query: () => `deaths`,
    }),
    // /api/daily: global cases per day
    getDaily: builder.query({
      query: () => `daily`,
    }),
    // /api/daily/[date]: detail of updates in a [date] (e.g. /api/daily/2-14-2020)
    getDailyByDate: builder.query({
      query: (date) => `daily/${date}`,
    }),
    // /api/countries: all countries and their ISO codes
    getCountries: builder.query({
      query: () => `countries`,
    }),
    // /api/countries/[country]: a [country] summary (e.g. /api/countries/Indonesia or /api/countries/USA or /api/countries/CN)
    getCountry: builder.query({
      query: (country) => `countries/${country}`,
    }),
    // /api/countries/[country]/confirmed: a [country] cases per region sorted by confirmed cases
    getConfirmedByCountry: builder.query({
      query: (country) => `countries/${country}/confirmed`,
    }),
    // /api/countries/[country]/recovered: a [country] cases per region sorted by recovered cases
    getRecoveredByCountry: builder.query({
      query: (country) => `countries/${country}/recovered`,
    }),
    // /api/countries/[country]/deaths: a [country] cases per region sorted by death toll
    getDeathsByCountry: builder.query({
      query: (country) => `countries/${country}/deaths`,
    }),
    // /api/countries/[country]/og: generate a summary open graph image for a [country]
    getOpenGraphByCountry: builder.query({
      query: (country) => `api/countries/${country}/og`,
    }),
  }),
});

export async function fetchRegions() {
  const response = await fetch("https://covid19.mathdro.id/api/confirmed");
  return response.json();
}

export const { useGetConfirmedRegionsQuery } = covid19Api;
