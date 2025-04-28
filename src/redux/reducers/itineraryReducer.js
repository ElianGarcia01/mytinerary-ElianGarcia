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
    console.log("La solicitud fue exitosa");
    state.itineraries = action.payload;
    state.status = statusHttp.SUCCED;
  });

  builder.addCase(getItineraries.pending, (state) => {
    console.log("La solicitud fue pending");
    state.status = statusHttp.PENDING;
  });

  builder.addCase(getItineraries.rejected, (state, action) => {
    console.log("La solicitud fue error");
    state.status = statusHttp.FAILED;
    state.error = action.error;
  });
});

export default itineraryReducer;
