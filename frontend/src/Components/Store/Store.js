import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
