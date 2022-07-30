import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, author } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    <article className="book">
      <header className="book-info">
        <h4 className="book-category">category</h4>
        <h3 className="book-title">{title}</h3>
        <h5 className="book-author">{author}</h5>
        <div className="actions">
          <button type="button">Comments</button>
          <div className="pipe" />
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <div className="pipe" />
          <button type="button">Edit</button>
        </div>
      </header>
      <section className="progress">
        <div className="progress-stat">
          <div className="progress-circle" />
          <div className="progress-status">
            <div className="progress-percent">100%</div>
            <div className="progress-state">Completed</div>
          </div>
        </div>
        <div className="pipe" />
        <div className="progress-chapter">
          <p className="chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">CHAPTER XX</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </section>
    </article>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
