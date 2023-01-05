import { combineReducers, createStore } from 'redux';
import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const configureStore = () => createStore(rootReducer);
export default configureStore;