import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmark: [],
  list: [],
};

export const listOperationsSlice = createSlice({
  name: "listOperations",
  initialState,
  reducers: {
    setBookmark: (state, action) => {
      state.bookmark = [...state.bookmark, action.payload];
    },
    deleteBookmark: (state, action) => {
      state.bookmark = state.bookmark.filter(
        (bookmarkId) => bookmarkId !== action.payload
      );
    },
    setList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deleteList: (state, action) => {
      state.list = state.list.filter((listId) => listId !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBookmark, setList, deleteBookmark, deleteList } =
  listOperationsSlice.actions;

export default listOperationsSlice.reducer;
