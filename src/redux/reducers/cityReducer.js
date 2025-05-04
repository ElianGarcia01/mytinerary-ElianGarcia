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
        state.cities = action.payload;
        state.status = statusHttp.SUCCED;
      });
    
      builder.addCase(getCities.pending, (state) => {
        state.status = statusHttp.PENDING;
      });
    
      builder.addCase(getCities.rejected, (state, action) => {
        state.status = statusHttp.FAILED;
        state.error = action.error;
      });
})

export default cityReducer;
