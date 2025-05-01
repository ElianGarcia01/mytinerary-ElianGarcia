import { createAction ,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk('auth/login', async ({email, password}) => {
    const user = {email, password}
    const response = await axios.post('http://localhost:3000/api/auth/signin', user)

    console.log(response.data)
    return response.data.response
    
})