import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPoint } from "../../types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://89.223.68.16/",
  }),
  endpoints: (builder) => ({
    getPoints: builder.query<IPoint[], void>({
      query: () => ({
        url: `/points`,
        method: "GET",
      }),
    }),
  }),
});
