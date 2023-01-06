export const BOOK_REMOVED = 'book-store/src/redux/book/BOOK_REMOVED';
export const BOOK_ADDED = 'book-store/src/redux/book/BOOK_ADDED';
export const BOOKS_RETRIEVED = 'book-store/src/redux/book/BOOKS_RETRIEVED';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${BOOK_REMOVED}/fulfilled`:
      return state.filter((book) => book.item_id !== action.meta.arg);

    case `${BOOK_ADDED}/fulfilled`:
      return state.concat(action.meta.arg);
    case `${BOOKS_RETRIEVED}/fulfilled`:
      return Object.keys(action.payload).map((key) => {
        const { title, author, cathegory } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          cathegory,
        };
      });
    default: return state;
  }
};

export default bookReducer;