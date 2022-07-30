import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Categories from './components/Categories';
import Books from './components/Books';

const App = () => {
  const state = useSelector((state) => state);

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
