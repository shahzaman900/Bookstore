import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S3DmuYYK5Cn1UH3umydd/books';

// create book
export const addBook = createAsyncThunk('create book', async (data, { rejectWithValue }) => {
  try {
    await axios.post(url, data);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// get books
export const getBook = createAsyncThunk('books/getbooks', async () => {
  try {
    const responce = await axios.get(url);
    return responce.data;
  } catch (error) {
    throw new Error('did not load data');
  }
});

// delete book
export const deleteBookFromBooks = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    await axios.delete(`${url}/${bookId}`);
    return bookId;
  } catch (error) {
    throw new Error('Book has been deleted');
  }
});

const books = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: '',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getBook.fulfilled, (state, action) => {
        const booksData = action.payload;
        const arrayofBooks = Object.keys(booksData).map((itemId) => ({
          item_id: itemId,
          ...booksData[itemId][0],
        }));

        return {
          ...state,
          isLoading: false,
          books: arrayofBooks,
        };
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
      })
      .addCase(deleteBookFromBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default books.reducer;
