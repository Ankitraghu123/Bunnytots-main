
import { createSlice } from "@reduxjs/toolkit";
import {
  createSyllabus,
  fetchAllSyllabus,
  deleteSyllabus,
  updateSyllabus,
  filterSyllabus,
} from "./syllabusThunks";

const syllabusSlice = createSlice({
  name: "syllabus",
  initialState: {
    syllabusList: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {
    clearSyllabusMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // CREATE
      .addCase(createSyllabus.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSyllabus.fulfilled, (state, action) => {
        state.loading = false;
        state.syllabusList.push(action.payload.syllabus);
        state.message = action.payload.message;
      })
      .addCase(createSyllabus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // FETCH ALL
      .addCase(fetchAllSyllabus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllSyllabus.fulfilled, (state, action) => {
        state.loading = false;
        state.syllabusList = action.payload;
      })
      .addCase(fetchAllSyllabus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // UPDATE
      .addCase(updateSyllabus.fulfilled, (state, action) => {
        const index = state.syllabusList.findIndex(
          (s) => s._id === action.payload._id
        );
        if (index !== -1) {
          state.syllabusList[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteSyllabus.fulfilled, (state, action) => {
        state.syllabusList = state.syllabusList.filter(
          (item) => item._id !== action.payload.id
        );
      })

      // FILTER
      .addCase(filterSyllabus.fulfilled, (state, action) => {
        state.syllabusList = action.payload;
      });
  },
});

export const { clearSyllabusMessage } = syllabusSlice.actions;
export default syllabusSlice.reducer;
