import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <header>
        <h1 className="logo">Bookstore CMS</h1>
        <nav>
          <Link to="/">Books</Link>
          <Link to="/Categories">Categories</Link>
        </nav>
        <div className="user">
          <i className="fa-solid fa-user" />
        </div>
      </header>
    );
  }
}

export default Navbar;
