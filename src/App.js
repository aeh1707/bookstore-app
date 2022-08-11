import './index.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Categories from './components/Categories';
import { fetchBooks } from './redux/books/books';
import Books from './components/Books';

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => async () => {
    await dispatch(fetchBooks());
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Books BooksList={state.books} />} />
          <Route path="/Categories" element={<Categories Categories={state.categories} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
