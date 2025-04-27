import { createReducer } from "@reduxjs/toolkit";
import getItineraries from "../actions/ItineraryAction";

const statusHttp = {
  IDLE: "idle",
  SUCCED: "succes",
  FAILE: "failed",
  PENDING: "pending",
};

const itinerariesState = {
  itineraries: [],
  status: statusHttp.IDLE,
  error: null,
};

const initialState = {
  itinerariesState: itinerariesState,
};

const itineraryReducer = createReducer(initialState, (builder) => {
  builder.addCase(getItineraries.fulfilled, (state, action) => {
    console.log("La solicitud fue exitosa");
    const itinerariesState = state.itinerariesState;
    itinerariesState.itineraries = action.payload;
    itinerariesState.status = statusHttp.SUCCED;
  });

  builder.addCase(getItineraries.pending, (state) => {
    console.log("La solicitud fue pending");
    const itinerariesState = state.itinerariesState;
    itinerariesState.status = statusHttp.PENDING;
  });

  builder.addCase(getItineraries.rejected, (state, action) => {
    console.log("La solicitud fue error");
    const itinerariesState = state.itinerariesState;
    itinerariesState.status = statusHttp.PENDING;
    itinerariesState.error = action.error;
  });
});

export default itineraryReducer;
