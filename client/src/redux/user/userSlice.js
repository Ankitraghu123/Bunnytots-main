import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  fetchCurrentUser,
  fetchAllUsers,
  updateUserById,
  adminUpdatePassword,
  logoutUser,
} from "./userThunks";
import toast from "react-hot-toast";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    users: [],
    loading: false,
    error: null,
    message: null,
    token: null,
  },
  reducers: {
    clearUserMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET CURRENT USER
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })

      // FETCH ALL USERS
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      // UPDATE USER
      .addCase(updateUserById.fulfilled, (state, action) => {
        // Ensure state.users is an array
        if (!Array.isArray(state.users)) {
          console.warn("Expected users to be array but got:", state.users);
          state.users = []; // fallback to avoid breaking everything
          return;
        }

        const index = state.users.findIndex(
          (u) => u._id === action.payload._id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        } else {
          console.warn("User not found for update:", action.payload._id);
        }
      })

      // ADMIN UPDATE PASSWORD
      .addCase(adminUpdatePassword.fulfilled, (state, action) => {
        state.message = action.payload.message;
      })

      // ! Log out
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.message = action.payload?.message || "Logout successful";
        toast.success(state.message);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export const { clearUserMessage } = userSlice.actions;
export default userSlice.reducer;
