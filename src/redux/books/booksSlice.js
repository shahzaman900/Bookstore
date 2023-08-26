/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// appid: 1llqPGV5eTnNvJ425fbb

// const getid = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1llqPGV5eTnNvJ425fbb/books';

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  try {
    const book = await axios.post(url, data);
    const res = await book.json();
    return res;
  } catch (error) {
    throw new Error('Add failed');
  }
});

const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addBook.pending]: (state) => {
      state.loading = true;
    },
    [addBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    },
    [addBook.rejected]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
  },
});

// export const { removeBook } = books.actions;
export default books.reducer;
