import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const getCities = createAsyncThunk("cities/getCities", async () => {
  const response = await axios.get(
    "http://localhost:8080/api/cities/allCities"
  )
  return response.data.response
})

export default getCities
