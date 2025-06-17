import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const API = "/api/user";

export const loginUser = createAsyncThunk(
  "user/login",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/login`, formData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/register`, formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/me`, { withCredentials: true });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/all-user`, { withCredentials: true });
      return res.data.users || res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const updateUserById = createAsyncThunk(
  "user/updateUser",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${API}/${id}`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return res.data.updated;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const adminUpdatePassword = createAsyncThunk(
  "user/adminUpdatePassword",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${API}/update-password`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API}/logout`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);
