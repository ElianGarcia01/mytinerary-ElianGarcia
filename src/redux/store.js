import { configureStore } from "@reduxjs/toolkit"
import cityReducer from "./reducers/cityReducer"
import searchReducer from "./reducers/searchReducer"
import itineraryReducer from "./reducers/itineraryReducer"

const store = configureStore({
    reducer: {
        city: cityReducer,
        search: searchReducer,
        Itinerary: itineraryReducer
    }
})

export default store