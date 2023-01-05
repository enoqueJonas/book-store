import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book.js';
import BookForm from './BookForm.js';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
        <div className="wrapper">
            {books.map((book) => (
                <Book title={book.title} author={book.author} />
            ))}
            <BookForm />
        </div>
  );
};

export default BookList;