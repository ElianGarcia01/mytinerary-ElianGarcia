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


const signOut = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post("http://localhost:8080/api/auth/signOut", {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        
        // Limpiar el localStorage después de una respuesta exitosa
        localStorage.removeItem('token')
        return response.data
    } catch (error) {
        // Limpiar el localStorage incluso si hay error (por ejemplo, token expirado)
        localStorage.removeItem('token')
        if (error.response) {
            return rejectWithValue(error.response.data.message)
        }
        return rejectWithValue(error.message)
    }
})

const setUser = createAction('auth/setUser')

export {login, setUser, signOut}