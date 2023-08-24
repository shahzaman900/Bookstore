import { createSlice } from '@reduxjs/toolkit';

const books = createSlice({
  name: '',
  initialState: [],
  reducers: {
    addBook: (state) => state,
    removeBook: (state) => state,
  },
});

export const { addBook, removeBook } = books.actions;
export default books.reducer;
