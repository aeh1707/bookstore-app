import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const readUserInput = (e) => {
    const input = e.target;
    setBook({
      ...book,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (book.title && book.author) {
      const newBook = {
        title: book.title,
        author: book.author,
      };
      e.target.reset();
      dispatch(addBook(newBook));
    }
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={submit}>
        <input type="text" id="title" name="title" onChange={readUserInput} placeholder="add title.." />
        <input type="text" id="author" name="author" onChange={readUserInput} placeholder="add author.." />
        <button type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default Form;
