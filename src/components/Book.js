import React from 'react';

const Book = (props) => (
        <div className="book">
            <div className="book-description">
                <p className="book-categorie">Categorie </p>
                <p className="book-author">{props.author} </p>
                <p className="book-title">{props.title}</p>
            </div>
            <div className="actions">
                <button>Remove</button>
            </div>
        </div>
);

export default Book;