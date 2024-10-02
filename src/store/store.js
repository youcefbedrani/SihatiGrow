import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Example slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
