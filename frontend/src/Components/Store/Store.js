import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice";
import userReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
  },
});
