import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
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

export default Navbar;
