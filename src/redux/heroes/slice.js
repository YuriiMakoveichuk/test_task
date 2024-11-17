import { createSlice } from "@reduxjs/toolkit";
import { getHeroes, getHeroId } from "./operation1";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
};

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getHeroes.pending, handlePending)
      .addCase(getHeroes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
        state.currentPage = action.payload.currentPage;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getHeroes.rejected, handleRejected)

      .addCase(getHeroId.pending, handlePending)
      .addCase(getHeroId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getHeroId.rejected, handleRejected);
  },
});
export const heroesReducer = heroesSlice.reducer;
