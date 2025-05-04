import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Peticion https
const getItineraries = createAsyncThunk("shop/getItineraries", async (nameCity) => {
  const response = await axios.get(`http://localhost:8080/api/itineraries/city/${nameCity}`);
  return response.data.response
})

export default getItineraries