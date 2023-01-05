const BOOK_REMOVED = 'book-store/src/redux/book/BOOK_REMOVED';
const BOOK_ADDED = 'book-store/src/redux/book/BOOK_ADDED';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_REMOVED:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case BOOK_ADDED:
      return [...state, action.payload];
    default: return state;
  }
};

export const bookRemoved = (bookID) => ({
  type: BOOK_REMOVED,
  payload: bookID,
});

export const bookAdded = (book = {}) => ({
  type: BOOK_ADDED,
  payload: book,
});

export default bookReducer;