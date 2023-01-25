import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books-api';
import './BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Non-fiction');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      item_id: uuid(),
      title,
      author,
      category,
    };
    dispatch(addBook(obj));
    setAuthor('');
    setTitle('');
    setCategory('');
  };

  return (
        <form className='book-form' onSubmit={handleSubmit}>
            <input className='book-item book-title' type='text' placeholder="Book title" onChange={onTitleChange} required/>
            <input className='book-item book-author' type='text' placeholder='Book author' onChange={onAuthorChange} required/>
            <button className='btn-add'>ADD BOOK</button>
        </form>
  );
};

export default BookForm;