import { createReducer } from "@reduxjs/toolkit";
import getCities from "../actions/cityAction";

export const statusHttp = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCED: "succeded",
  FAILED: "failed",
}

const initialState = {
  cities: [],
  status: statusHttp.IDLE,
  error: null,
}

const cityReducer = createReducer(initialState, (builder) => {
    builder.addCase(getCities.fulfilled, (state, action) => {
        console.log("La solicitud fue exitosa");
        state.cities = action.payload;
        state.status = statusHttp.SUCCED;
      });
    
      builder.addCase(getCities.pending, (state) => {
        console.log("La solicitud es pending");
        state.status = statusHttp.PENDING;
      });
    
      builder.addCase(getCities.rejected, (state, action) => {
        console.log("La solicitud fue error");
        state.status = statusHttp.FAILED;
        state.error = action.error;
      });
})

export default cityReducer;
