import { configureStore } from "@reduxjs/toolkit";

import { heroesReducer } from "./heroes/slice";
import { starshipsReducer } from "./starships/slice.js";
import { filmsReducer } from "./films/slice.js";

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
    films: filmsReducer,
    starships: starshipsReducer,
  },
});
