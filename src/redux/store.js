import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import listOperationsSlice from "./listOperationsSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    listOperations:listOperationsSlice
  },
});
