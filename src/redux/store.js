import { configureStore } from "@reduxjs/toolkit"
import cityReducer from "./reducers/cityReducer"
import searchReducer from "./reducers/searchReducer"
import itineraryReducer from "./reducers/itineraryReducer"
import { authReducer } from "./reducers/authReducer"

const store = configureStore({
    reducer: {
        city: cityReducer,
        search: searchReducer,
        Itinerary: itineraryReducer,
        auth: authReducer
    }
})

export default store