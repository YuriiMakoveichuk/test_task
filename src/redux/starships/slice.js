import { createSlice } from "@reduxjs/toolkit";
import { getStarships } from "./operation.js";

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

const starshipsSlice = createSlice({
  name: "starships",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getStarships.pending, handlePending)
      .addCase(getStarships.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getStarships.rejected, handleRejected);
  },
});
export const starshipsReducer = starshipsSlice.reducer;
