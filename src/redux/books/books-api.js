import { createAsyncThunk } from '@reduxjs/toolkit';
import { BOOKS_RETRIEVED, BOOK_ADDED, BOOK_REMOVED } from './book';

export const getBooks = createAsyncThunk(BOOKS_RETRIEVED, async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();
  return data;
});

export const addBook = createAsyncThunk(BOOK_ADDED, async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books', {
    method: 'POST',
    body: JSON.stringify(book),
    mode: 'cors',
    redirect: 'follow',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export const removeBook = createAsyncThunk(BOOK_REMOVED, async (bookID) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cyrOEiom50i8ck38kYLJ/books/${bookID}`, {
    method: 'DELETE',
    mode: 'cors',
    redirect: 'follow',
  });
});
