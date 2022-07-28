const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/REMOVE_BOOK';

const getActionData = ({ id, title, author }) => ({
  id, title, author,
});

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        getActionData(action),
      ];

    case DEL_BOOK:
      return [
        ...state.slice(0, action.id), ...state.slice(action.id + 1, state.length),
      ];

    default: return state;
  }
};

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

export const delBook = (id) => ({
  type: DEL_BOOK,
  id,
});

export default bookReducer;
