import { createSlice } from "@reduxjs/toolkit"

const dogBreedSlice = createSlice({
    name: "dogBreed",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export default dogBreedSlice.reducer