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

export const booksRetrieved = () => async (dispatch) => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((response) => response.json()).catch((err) => err);

  dispatch({
    type: BOOKS_RETRIEVED,
    payload: res,
  });
};

export const bookRemoved = (bookID) => async (dispatch) => {
  const res = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books/${bookID}}`, {
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
  return res;
};

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
  console.log(res);
  return res;
};

export default bookReducer;