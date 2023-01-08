import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Book from './Book.js';
import BookForm from './BookForm.js';
import { getBooks } from '../redux/books/books-api.js';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.bookReducer, shallowEqual);

  return (
    <div className="book-list">
      {books.map((book) => (
        <Book title={book.title} author={book.author} id={book.item_id} key={book.item_id} />
      ))}
      <BookForm />
    </div>
  );
};

export default BookList;