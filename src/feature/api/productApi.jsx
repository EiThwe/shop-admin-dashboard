import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-ecommerce-api.vercel.app",
  }),
  tagTypes: ["productApi"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page) => ({
        url: `/products?page=${page}`,
        providesTags: ["productApi"],
      }),
    }),
    createProducts: builder.mutation({
      query: (item) => ({
        url: "/products",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["productApi"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["productApi"],
    }),
  }),
});
export const { useGetProductsQuery, useCreateProductsMutation,useDeleteProductMutation } = productApi;
