// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import syllabusReducer from "./syllabus/syllabusSlice";
import userReducer from "./user/userSlice";
import alertReducer from "./alertsSlice";
import studentReducer from "./student/documentSlice";

const store = configureStore({
  reducer: {
    syllabus: syllabusReducer,
    user: userReducer,
    alerts: alertReducer,
    document: studentReducer,
  },
});

export default store;
