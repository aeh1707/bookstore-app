import React from 'react';
import { PropTypes } from 'prop-types';
import Navbar from './Navbar';
import Book from './Book';
import Form from './Form';

const Books = (props) => {
  const { BooksList } = props;

  return (
    <>
      <Navbar />
      <main className="books">
        <ul className="books-list">
          {BooksList.map((book) => (
            <li key={book.id}>
              <Book
                id={book.id}
                author={book.author}
                title={book.title}
              />
            </li>
          ))}
        </ul>
        <Form />
      </main>
    </>
  );
};

Books.propTypes = {
  BooksList: PropTypes.instanceOf(Array).isRequired,
};

export default Books;
