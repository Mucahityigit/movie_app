import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmark: [],
  bookmarkCount:0,
  list: [],
  listCount:0
};


export const listOperationsSlice = createSlice({
  name: "listOperations",
  initialState,
  reducers: {
    setBookmarkCount: (state) => {
        state.bookmarkCount += 1;
    },
    setBookmark: (state,action) => {
        state.bookmark.push(action.payload)
    },
    setList: (state,action) => {
        state.list.push(action.payload)
    },
    setListCount: (state) => {
        state.listCount += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBookmarkCount,setListCount,setBookmark,setList } = listOperationsSlice.actions;

export default listOperationsSlice.reducer;
