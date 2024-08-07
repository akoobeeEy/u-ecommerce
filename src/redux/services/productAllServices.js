import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINT } from "../../constants";

const productAllServices = createApi({
  reducerPath: "productAll",
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page = 1, limit }) =>
        `/api/product?limit=${limit}&page=${page}`,
    }),
    getSearchProducts: builder.query({
      query: (search) =>
        `/api/product?q=${encodeURIComponent(search.trim().toLowerCase())}`,
    }),
    getProductById: builder.query({
      query: (id) => `/api/product/${id}`,
    }),
    getProductsByCid: builder.query({
      query: (cid) => `/api/product?cid=${cid}`,
    }),
    getProductsByBrand: builder.query({
      query: (bid) => `/api/product?bid=${bid}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSearchProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCidQuery,
  useGetProductsByBrandQuery,
} = productAllServices;

export default productAllServices;
