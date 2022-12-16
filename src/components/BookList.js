import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const BookList = () => (
        <div className="wrapper">
            <Book title={'title'} author={'author'}/>
            <BookForm />
        </div>
);

export default BookList;