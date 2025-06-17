import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

const API_URL = "/api/syllabus";

export const createSyllabus = createAsyncThunk(
  "syllabus/create",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAllSyllabus = createAsyncThunk(
  "syllabus/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API_URL);
      return res.data.syllabus || res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteSyllabus = createAsyncThunk(
  "syllabus/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`, { withCredentials: true });
      return { id };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateSyllabus = createAsyncThunk(
  "syllabus/update",
  async ({ id, updatedItem }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedItem, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const filterSyllabus = createAsyncThunk(
  "syllabus/filter",
  async ({ subject, classes }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();
      if (subject) query.append("subject", subject);
      if (classes) query.append("classes", classes);

      const res = await axios.get(`${API_URL}/search?${query.toString()}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
