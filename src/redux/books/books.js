const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ewYk4YjZVq8pYtMAfktj/books';
const ADD = 'BOOK_ADDED';
const DEL = 'BOOK_REMOVED';
const READ = 'BOOKS_RETRIEVED';

// Action creators
export const addBook = ({
  // eslint-disable-next-line camelcase
  item_id, title, author, category,
}) => ({
  type: ADD,
  item_id,
  title,
  author,
  category,
});

// eslint-disable-next-line camelcase
export const removeBook = (item_id) => ({
  type: DEL,
  item_id,
});

export const getActionData = ({
  // eslint-disable-next-line camelcase
  item_id, title, author, category,
}) => ({
  item_id, title, author, category,
});

export const readBooks = (books) => ({
  type: READ,
  books,
});

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getActionData(action),
      ];
    case DEL:
      return state.filter((book) => book.item_id !== action.item_id);

    case READ:
      return action.books;

    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  await fetch(URL)
    .then((res) => res.json())
    .then((books) => {
      const BooksList = [];
      Object.keys(books).forEach((key) => {
        BooksList.push({
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        });
      });
      dispatch(readBooks(BooksList));
    });
};

export const postBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(addBook(book));
    });
};

export const deleteBook = (id) => async (dispatch) => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => {
      dispatch(removeBook(id));
    });
};

export default bookReducer;
