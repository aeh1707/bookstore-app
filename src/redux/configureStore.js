import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categorieReducer from './categories/categories';

const store = configureStore({
  reducer: {
    categories: categorieReducer,
    books: bookReducer,
  },
});

export default store;
