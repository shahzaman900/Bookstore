/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// appid: SEBFlAYrIbqsFoGbghsA

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SEBFlAYrIbqsFoGbghsA/books';

// export const addBook = createAsyncThunk('addbook', async (data, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(url, data);
//     const newbookk = await response.json();
//     return newbookk;
//   } catch (error) {
//     return rejectWithValue(error.response);
//   }
// });

export const addBook = createAsyncThunk(
  'createBook',
  async (data, { rejectWithValue }) => {
    const response = await axios({
      method: 'post',
      url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SEBFlAYrIbqsFoGbghsA/books',
      data: JSON.stringify(data),
    });

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const showBooks = createAsyncThunk(
  'showBooks',
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SEBFlAYrIbqsFoGbghsA/books',
    );

    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
    loading: false,
    error: null,
  },
  reducers: {
    // addBook: (state, action) => {
    //   state.push(action.payload);
    // },

    removeBook: (state, action) => {
      state.filter((book) => book.item_id !== action.payload);
    },
  },
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
    [showBooks.pending]: (state) => {
      state.loading = true;
    },
    [showBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [showBooks.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { removeBook } = books.actions;
export default books.reducer;
