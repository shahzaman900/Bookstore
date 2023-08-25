import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),

    removeBook: (state, action) => {
      state.filter((book) => book.item_id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = books.actions;
export default books.reducer;
