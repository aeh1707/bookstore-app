import { combineReducers } from 'redux';
import bookReducer from './books/books';
import categorieReducer from './categories/categories';

export default combineReducers({
  bookReducer,
  categorieReducer,
});
