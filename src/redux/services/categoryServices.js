import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINT } from "../../constants";

const categoryServices = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
  }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: ({ limit = 1000, page = 1 } = {}) => `/api/category?limit=${limit}&page=${page}`,
      providesTags: ["category"],
    }),
    getCategoriesById: builder.query({
      query: (id) => `/api/category/${id}`,
      providesTags: ["category"],
    }),
    getCategoriesBrand: builder.query({
      query: (id) => `/api/category/${id}/brand`,
      providesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoriesByIdQuery,
  useGetCategoriesBrandQuery,
} = categoryServices;

export default categoryServices;
