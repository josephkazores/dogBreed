import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

declare type DogBreedApiResponse  = {
  message: object
  status: string
}

declare type DogImagesApiResponse = {
  message: string
  status: string
}

export const dogBreedApi = createApi({
  reducerPath: "dogBreedApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/breeds/list/" }),
  tagTypes: ["Dogs"],
  endpoints: (builder) => ({
    getAll: builder.query<DogBreedApiResponse, void>({
      query: () => "all",
      providesTags: [{ type: "Dogs", id: "LIST" }],
    }),
  }),
});

export const dogImagesApi = createApi({
  reducerPath: "dogImagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/" }),
  tagTypes: ["Images"],
  endpoints: (builder) => ({
    getImageByName: builder.query<DogImagesApiResponse, string>({
      query: (name) => `breed/${name}/images/random`,
      providesTags: [{ type: "Images", id: "RANDOM" }],
    }),
  }),
})