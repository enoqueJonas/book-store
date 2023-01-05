import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;