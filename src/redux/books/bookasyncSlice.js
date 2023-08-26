/* eslint-disable import/no-extraneous-dependencies */
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// appid: S3DmuYYK5Cn1UH3umydd

// const getid = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S3DmuYYK5Cn1UH3umydd/books';

// // create book
// export const addBook = createAsyncThunk('create book', async (data, { rejectWithValue }) => {
//   try {
//     await axios.post(url, data);
//     console.log(data);
//     return data;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });

// get books
// export const getBook = createAsyncThunk('get books', async () => {
//   try {
//     const book = await axios.get(url);
//     console.log('datta', book);
//     return book.data;
//   } catch (error) {
//     throw new Error('Fetch failed');
//   }
// });

// const books = createSlice({
//   name: 'books',
//   initialState: {
//     books: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
  // extraReducers: {
  //   [addBook.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [addBook.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.books.push(action.payload);
  //   },
  //   [addBook.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  //   [getBook.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getBook.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.books = action.payload;
  //   },
  //   [getBook.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },
  // extraReducers(builder) {
  //   builder
    // .addCase(fetchBook.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(fetchBook.fulfilled, (state, action) => {
    //   const booksData = action.payload;
    //   const booksArray = Object.keys(booksData).map((itemId) => ({
    //     item_id: itemId,
    //     ...booksData[itemId][0],
    //   }));

    //   return {
    //     ...state,
    //     isLoading: false,
    //     books: booksArray,
    //   };
    // })
    // .addCase(fetchBook.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // })
      // .addCase(addBook.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.books.push(action.payload);
      //   console.log(books);
      // });
    // .addCase(deleteBook.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.books = state.books.filter((book) => book.item_id !== action.payload);
    // });
//   },
// });

// export const { removeBook } = books.actions;
// export default books.reducer;
