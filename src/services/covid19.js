import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const covid19Api = createApi({
  reducerPath: "covid19Api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://covid19.mathdro.id/api/" }),
  endpoints: (builder) => ({
    getConfirmedRegions: builder.query({
      query: () => `confirmed`,
    }),
  }),
});

export const { useGetConfirmedRegionsQuery } = covid19Api;
