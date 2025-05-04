import { createReducer } from "@reduxjs/toolkit";
import getItineraries from "../actions/ItineraryAction";
import { statusHttp } from "./cityReducer";

const initialState = {
  itineraries: [],
  status: statusHttp.IDLE,
  error: null,
};

const itineraryReducer = createReducer(initialState, (builder) => {
  builder.addCase(getItineraries.fulfilled, (state, action) => {
    state.itineraries = action.payload;
    state.status = statusHttp.SUCCED;
  });

  builder.addCase(getItineraries.pending, (state) => {
    state.status = statusHttp.PENDING;
  });

  builder.addCase(getItineraries.rejected, (state, action) => {
    state.status = statusHttp.FAILED;
    state.error = action.error;
  });
});

export default itineraryReducer;
