import { createSlice } from "@reduxjs/toolkit";
import { getFilms } from "./operation.js";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const filmsSlice = createSlice({
  name: "films",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, handlePending)
      .addCase(getFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getFilms.rejected, handleRejected);
  },
});
export const filmsReducer = filmsSlice.reducer;
