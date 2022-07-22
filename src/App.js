import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
