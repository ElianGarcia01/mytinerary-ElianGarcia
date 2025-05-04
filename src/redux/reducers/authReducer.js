import { createReducer } from "@reduxjs/toolkit"
import { login, logout, setUser } from "../actions/authAction.js"


const initialState = {
    user: null,
    token: null,
    status: "idle",
    error: null
}

export const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
        state.status = 'succeded'
    })
    builder.addCase(login.pending, (state) => {
        state.status = 'pending'
        state.error = null
        state.user = null
    })
    builder.addCase(login.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
        state.user = null
        state.token = null
    })
    builder.addCase(setUser, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
    })
    builder.addCase(logout, (state) => {
        state.user - null
        state.token = null
    })
})