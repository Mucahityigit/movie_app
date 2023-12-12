import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmark: [],
  list: [],
};


export const listOperationsSlice = createSlice({
  name: "listOperations",
  initialState,
  reducers: {
    setBookmark: (state,action) => {
        state.bookmark.push(action.payload)
    },
    deleteBookmark:(state,action)=>{
        state.bookmark.filter(bookmarkId =>{
          if(bookmarkId != action.payload){
            return bookmarkId;
          }
        })
    },
    setList: (state,action) => {
        state.list.push(action.payload)
    },
    deleteList:(state,action)=>{
      const index = state.list.indexOf(action.payload);
      if (index > -1) { // only splice array when item is found
        state.list.splice(index, 1); // 2nd parameter means remove one item only
      }

      // state.list.filter(listId =>{
      //   if(listId == action.payload){
      //     state.list.push(listId)
      //   }
      // })
    }
  },
});

// Action creators are generated for each case reducer function
export const { setBookmark,setList,deleteBookmark,deleteList } = listOperationsSlice.actions;

export default listOperationsSlice.reducer;
