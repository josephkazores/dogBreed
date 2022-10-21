import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  breeds: string[];
  likes: string[];
};
const initialState: State = {
  breeds: [],
  likes: [],
};

const dogBreedSlice = createSlice({
  name: "dogBreedLikes",
  initialState: initialState,
  reducers: {
    likeItem: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    },
    addBreed: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        breeds: [...state.breeds, action.payload],
      };
    },
    resetBreeds: (state) => {
      return {
        ...state,
        breeds: [],
      };
    },
  },
});

export const { likeItem, addBreed, resetBreeds } = dogBreedSlice.actions;

export default dogBreedSlice;
