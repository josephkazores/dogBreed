import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const dogBreedApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/breeds/list/" }),
  tagTypes: ["Dogs"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => "all",
      providesTags: [{ type: "Dogs", id: "LIST" }],
    }),
  }),
});