import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from '../redux/books/book';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [counter, setCounter] = useState(2);
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = () => {
    setCounter(counter + 1);
    const obj = {
      id: counter,
      title,
      author,
    };
    dispatch(bookAdded(obj));
  };

  return (
        <div>
            <input type='text' placeholder="Book title" onChange={onTitleChange} />
            <input type='text' placeholder='Book author' onChange={onAuthorChange} />
            <button onClick={handleSubmit}>ADD BOOK</button>
        </div>
  );
};

export default BookForm;