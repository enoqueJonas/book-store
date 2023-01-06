const BOOK_REMOVED = 'book-store/src/redux/book/BOOK_REMOVED';
const BOOK_ADDED = 'book-store/src/redux/book/BOOK_ADDED';
const initialState = [
  {
    id: 0,
    author: 'James Clear',
    title: 'Atomic Habits',
  },
  {
    id: 1,
    author: 'Robert Kiyosaki',
    title: 'Rich dad poor dad',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_REMOVED:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case BOOK_ADDED:
      return [...state, action.payload];
    default: return state;
  }
};

// export const bookRemoved = (bookID) => ({
//     type: BOOK_REMOVED,
//     payload: bookID,
// });

export const bookRemoved = (bookID) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books/${bookID}}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((response) => response.json()).catch((err) => err);

  dispatch({
    type: BOOK_REMOVED,
    payload: bookID,
  });
};

// export const bookAdded = (book = {}) => ({
//   type: BOOK_ADDED,
//   payload: book,
// });

export const bookAdded = (book = {}) => async (dispatch) => {
  const obj = {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: 'Non-Fiction',
  };

  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books}', {
    method: 'POST',
    body: JSON.stringify(obj),
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((response) => response.json()).catch((err) => err);

  dispatch({
    type: BOOK_ADDED,
    payload: res,
  });
};

export default bookReducer;