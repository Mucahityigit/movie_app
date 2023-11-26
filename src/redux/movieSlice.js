import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

// const url =
//   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk1NTM5YzExOWQ4YmRkNjc0MDQ5NTI0MDIxODZkZSIsInN1YiI6IjY1NWMzMmY5MTA5MjMwMDEzOGM3ZTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68uCRBqGm9ARFy_eNGjmSK3ZVGh_rRWq1IjQPxNdYxo",
//   },
// };
// await fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => setMovies(Object.entries(data)[2][1]))
//   .catch((err) => console.error("error:" + err));

export const getMovies = createAsyncThunk("getmovies", async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTk1NTM5YzExOWQ4YmRkNjc0MDQ5NTI0MDIxODZkZSIsInN1YiI6IjY1NWMzMmY5MTA5MjMwMDEzOGM3ZTQzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68uCRBqGm9ARFy_eNGjmSK3ZVGh_rRWq1IjQPxNdYxo",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = movieSlice.actions;

export default movieSlice.reducer;
