/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: { itemBooks: booksReducer, categories: categoriesReducer },
});
export default store;
