// redux/document/documentSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

// Thunk: Upload Document
export const uploadDocument = createAsyncThunk(
  "document/upload",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/documents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Upload failed");
    }
  }
);

// Thunk: Fetch all
export const fetchDocuments = createAsyncThunk(
  "document/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/documents");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Fetch failed");
    }
  }
);

export const deleteDocument = createAsyncThunk(
  "documents/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/documents/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete failed");
    }
  }
);

const documentSlice = createSlice({
  name: "document",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      //
      .addCase(deleteDocument.fulfilled, (state, action) => {
        state.data = state.data.filter((doc) => doc.id !== action.payload);
      })
      .addCase(deleteDocument.rejected, (state, action) => {
        state.error = action.payload || "Delete failed";
      });
  },
});

export default documentSlice.reducer;
