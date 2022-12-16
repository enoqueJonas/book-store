import React from 'react';
import Book from './Book.js';
import BookForm from './BookForm.js';

const BookList = () => (
        <div className="wrapper">
            <Book title={'title'} author={'author'}/>
            <BookForm />
        </div>
);

export default BookList;