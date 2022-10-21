import { configureStore } from "@reduxjs/toolkit";

import dogBreedSlice from "./dogBreedSlice";
import { dogBreedApi, dogImagesApi } from "../api";

const store = configureStore({
  reducer: {
    [dogBreedSlice.name]: dogBreedSlice.reducer,
    [dogBreedApi.reducerPath]: dogBreedApi.reducer,
    [dogImagesApi.reducerPath]: dogImagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(dogBreedApi.middleware)
      .concat(dogImagesApi.middleware),
});

type RootState = ReturnType<typeof store.getState>;

export const selectDogBreedState= (state: RootState) =>
  state[dogBreedSlice.name];

export default store;
