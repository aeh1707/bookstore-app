import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categorieReducer from './categories/categories';

const rootReducer = () => combineReducers({
  bookReducer,
  categorieReducer,
});

// eslint-disable-next-line no-unused-vars
const store = configureStore({ reducer: rootReducer });
