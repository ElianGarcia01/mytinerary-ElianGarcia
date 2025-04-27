import { configureStore } from "@reduxjs/toolkit"
import cityReducer from "./reducers/cityReducer"
import searchReducer from "./reducers/searchReducer"

const store = configureStore({
    reducer: {
        city: cityReducer,
        search: searchReducer
    }
})

export default store