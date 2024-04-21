import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPoint, ISales, IMovements } from "../../types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://89.223.68.16/api",
  }),
  endpoints: (builder) => ({
    getPoints: builder.query<IPoint[], void>({
      query: () => ({
        url: `/points`,
        method: "GET",
      }),
    }),
    getSales: builder.query<ISales[], void>({
      query: () => ({
        url: `/sales`,
        method: "GET",
      }),
    }),
    getMovements: builder.query<IMovements[], void>({
      query: () => ({
        url: `/movements`,
        method: "GET",
      }),
    }),
  }),
});
