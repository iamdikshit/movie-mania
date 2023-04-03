import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    movies: [],
    isLoading: false,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { addMovies, toggleLoading } = searchSlice.actions;
export default searchSlice.reducer;
