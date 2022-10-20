import {configureStore} from "@reduxjs/toolkit"

import dogBreedReducer from "./dogBreedSlice"

const store = configureStore({
    reducer: {
        dogs: dogBreedReducer
    }
})

export default store