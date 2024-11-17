import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instants = axios.create({
  baseURL: "https://sw-api.starnavi.io/",
});

const fetchStarshipsPage = async (page) => {
  const { data } = await instants.get(`starships?page=${page}`);
  return data;
};
const getAllStarships = async (page = 1, allStarships = []) => {
  const data = await fetchStarshipsPage(page);
  allStarships.push(...data.results);
  if (data.next) {
    return getAllStarships(page + 1, allStarships);
  } else {
    return allStarships;
  }
};

// console.log("llStarships", allStarships);

export const getStarships = createAsyncThunk(
  "starships/fetchStarships",
  async (_, thunkAPI) => {
    try {
      const starships = await getAllStarships();
      console.log("data", starships);

      return starships;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
