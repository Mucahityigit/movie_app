import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  movieDetails: [],
  movieVideo: [],
  movieImage: [],
  genres: [],
};

export const getPopularMovies = createAsyncThunk(
  "getpopularmovies",
  async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
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
    return data.results;
  }
);
export const getUpcomingMovies = createAsyncThunk(
  "getupcomingmovies",
  async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
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
    return data.results;
  }
);
export const getTopRatedMovies = createAsyncThunk(
  "gettopratedmovies",
  async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;
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
    return data.results;
  }
);
export const getMovieDetails = createAsyncThunk(
  "getmoviedetails",
  async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
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
  }
);
export const getMovieVideo = createAsyncThunk(
  "getmovievideo",
  async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`;
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
    return data.results;
  }
);
export const getMovieImage = createAsyncThunk(
  "getmovieimage",
  async (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id}/images?include_image_language=en`;
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
  }
);
export const getGenres = createAsyncThunk("getgenres", async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
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
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(getMovieVideo.fulfilled, (state, action) => {
        state.movieVideo = action.payload;
      })
      .addCase(getMovieImage.fulfilled, (state, action) => {
        state.movieImage = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = movieSlice.actions;

export default movieSlice.reducer;
