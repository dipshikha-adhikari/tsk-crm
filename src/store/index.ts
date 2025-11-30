import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import postsReducer if you have posts slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;
