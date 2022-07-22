import React from 'react';
import Navbar from './Navbar';
import Book from './Book';
import Form from './Form';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksList: [
        {
          id: 1,
          author: 'Goarge R.R. Martin',
          title: 'Game of Thrones',
        },
        {
          id: 2,
          author: 'Kawazaki',
          title: 'Rich Dad, Poor Dad',
        },
      ],
    };
  }

  render() {
    const { BooksList } = this.state;
    return (
      <>
        <Navbar />
        <main className="books">
          <ul className="books-list">
            {BooksList.map((book) => (
              <li key={book.id}>
                <Book
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
  }
}

export default Books;
