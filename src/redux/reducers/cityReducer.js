import { createReducer } from "@reduxjs/toolkit";
import getCities from "../actions/cityAction";

export const statusHttp = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCED: "succeded",
  FAILED: "failed",
}

const citiesState = {
  cities: [],
  status: statusHttp.IDLE,
  error: null,
}

const initialState = {
  citiesState: citiesState,
};


const cityReducer = createReducer(initialState, (builder) => {
    builder.addCase(getCities.fulfilled, (state, action) => {
        console.log("La solicitud fue exitosa");
        const citiesState = state.citiesState;
        citiesState.cities = action.payload;
        citiesState.status = statusHttp.SUCCED;
      });
    
      builder.addCase(getCities.pending, (state) => {
        console.log("La solicitud es pending");
        const citiesState = state.citiesState;
        citiesState.status = statusHttp.PENDING;
      });
    
      builder.addCase(getCities.rejected, (state, action) => {
        console.log("La solicitud fue error");
        const citiesState = state.citiesState;
        citiesState.status = statusHttp.FAILED;
        citiesState.error = action.error;
      });
})

export default cityReducer;
