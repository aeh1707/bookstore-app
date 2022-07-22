import React from 'react';
import { PropTypes } from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const { title, author } = this.props;
    return (
      <article className="book">
        <header className="book-info">
          <h3 className="book-title">{title}</h3>
          <h4 className="book-category">category</h4>
          <h5 className="book-author">{author}</h5>
          <div className="actions">
            <button type="button">Comments</button>
            <div className="pipe" />
            <button type="button">Remove</button>
            <div className="pipe" />
            <button type="button">Edit</button>
          </div>
        </header>
        <section className="progress">
          <div className="progress-stat">
            <div className="progress-circle" />
            <div className="progress-percent" />
            <div className="progress-state" />
          </div>
          <div className="pipe" />
          <div className="progress-chapter">
            <p className="chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter" />
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </section>
      </article>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
