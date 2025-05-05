import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const user = { email, password };
      const response = await axios.post(
        "http://localhost:8080/api/auth/SignIn",
        user
      );
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

const signOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/auth/signOut",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Limpiar el localStorage después de una respuesta exitosa
      localStorage.removeItem("token");
      return response.data;
    } catch (error) {
      // Limpiar el localStorage incluso si hay error (por ejemplo, token expirado)
      localStorage.removeItem("token");
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signUp",
        userData
      );

      // Guardar token si viene en la respuesta
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Sign up failed");
    }
  }
)


const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async (googleToken, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/google", {
        token: googleToken,
      });

      // Guardar token en localStorage
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Google login failed");
    }
  }
);
  

const setUser = createAction("auth/setUser");

export { login, setUser, signOut, signUp, signInWithGoogle };
