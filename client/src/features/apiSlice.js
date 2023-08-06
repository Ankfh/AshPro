import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../Api,s/BaseUrl";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tageTypes: ["User"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (token) => ({
        url: "user/get",
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }),
      providesTags: ["User"],
    }),

    CreateUser: builder.mutation({
      query: (data) => ({
        url: "user/register",
        method: "POST",
        body: { data},
      }),
      invalidatesTags: ["User"],
    }),

    DeleteUser: builder.mutation({
      query: (id) => ({
        url: `user/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    UploadPhoto: builder.mutation({
      query: (photo) => ({
        url: "user/upload",
        method: "POST",
       body:  photo,
        formData: true,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUploadPhotoMutation,
} = productsApi;
