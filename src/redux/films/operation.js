import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instants = axios.create({
  baseURL: "https://sw-api.starnavi.io/",
});

export const getFilms = createAsyncThunk(
  "films/fetchFilms",
  async (_, thunkAPI) => {
    try {
      const { data } = await instants.get("films");

      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
