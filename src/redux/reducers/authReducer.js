import { createReducer } from "@reduxjs/toolkit"
import { login, setUser, signOut } from "../actions/authAction.js"

const initialState = {
    user: null,
    token: null,
    status: "idle",
    error: null,
    logoutStatus: "idle"
}

export const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.status = 'succeded'
            state.error = null
        })
        .addCase(login.pending, (state) => {
            state.status = 'pending'
            state.error = null
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload
            state.user = null
            state.token = null
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        })
        .addCase(signOut.pending, (state) => {
            state.logoutStatus = 'pending'
        })
        .addCase(signOut.fulfilled, (state) => {
            state.user = null
            state.token = null
            state.status = 'idle'
            state.logoutStatus = 'succeded'
            state.error = null
        })
        .addCase(signOut.rejected, (state, action) => {
            state.user = null
            state.token = null
            state.logoutStatus = 'failed'
            state.error = action.payload
        })
})