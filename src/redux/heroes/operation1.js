import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instants = axios.create({
  baseURL: "https://sw-api.starnavi.io/",
});

export const getHeroes = createAsyncThunk(
  "heroes/fetchAll",
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await instants.get(`people/?page=${page}`);

      return {
        data,
        currentPage: page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHeroId = createAsyncThunk(
  "heroes/fetchHeroId",
  async (heroId, thunkAPI) => {
    try {
      const { data } = await instants.get(`people/${heroId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
