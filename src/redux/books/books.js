import uuid from 'react-uuid';

const ADD = 'BOOK_ADDED';
const DEL = 'BOOK_REMOVED';

// Action creators
export const addBook = ({ title, author }) => ({
  type: ADD,
  id: uuid(),
  title,
  author,
});

export const removeBook = (id) => ({
  type: DEL,
  id,
});

const getActionData = ({ id, title, author }) => ({
  id, title, author,
});

const bookReducer = (state = [
  {
    id: uuid(),
    title: 'book 1',
    author: 'author 1',
  },
  {
    id: uuid(),
    title: 'book 2',
    author: 'author 2',
  },
  {
    id: uuid(),
    title: 'book 1',
    author: 'author 1',
  },
  {
    id: uuid(),
    title: 'book 2',
    author: 'author 2',
  },
], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getActionData(action),
      ];
    case DEL:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default bookReducer;
