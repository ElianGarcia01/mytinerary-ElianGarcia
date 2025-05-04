import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const login = createAsyncThunk('auth/login', async ({email, password},{rejectWithValue}) => {
    try {
        const user = {email, password}
        const response = await axios.post("http://localhost:8080/api/auth/SignIn", user)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message)
        }
    }
})

const setUser = createAction('auth/setUser')
const logout = createAction('auth/logout')


export {login, setUser, logout}