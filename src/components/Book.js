import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/book';

const Book = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(bookRemoved(e.target.id));
  };

  return (
        <div className="book">
            <div className="book-description">
                <p className="book-categorie">Categorie </p>
                <p className="book-author">{props.author} </p>
                <p className="book-title">{props.title}</p>
            </div>
            <div className="actions">
                <button id={props.id} onClick={handleRemove}>Remove</button>
            </div>
        </div>
  );
};

export default Book;