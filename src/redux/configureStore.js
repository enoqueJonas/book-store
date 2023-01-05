import { combineReducers, createStore } from "redux";
import book_reducer from "./books/book";
import categories_reducer from "./categories/categories";

const rootReducer = combineReducers({
    book_reducer,
    categories_reducer,
})

const configureStore = () => createStore(rootReducer);
export default configureStore;